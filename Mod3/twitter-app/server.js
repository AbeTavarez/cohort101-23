const express = require("express");
require("dotenv").config();
const connectDB = require("./utils/connectDB");
const Tweet = require("./models/Tweet");
const manyTweets = require("./models/manytweets");

//* Variables
const app = express();
const PORT = 3000;

//* App Config

//* Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// * Routes

/**
 * * Root
 */
app.get("/", (req, res) => {
  res.send("working!");
});

//* ========== View Routes

/**
 * * Index
 */
app.get("/tweets", async (req, res) => {
  try {
    const tweets = await Tweet.find({});
    res.send(tweets);
  } catch (e) {
    console.log(e);
  }
});

/**
 * * Show
 */
app.get("/tweets/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tweet = await Tweet.findById(id);
    res.send(tweet);
  } catch (e) {
    console.log(e);
  }
});

//* ======== API Routes

/**
 * Create POST
 */
app.post("/tweets", async (req, res) => {
  const createdTweet = await Tweet.create(req.body);
  res.send(createdTweet);
});

/**
 * * Update
 */
app.put("/tweets/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTweet = await Tweet.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updatedTweet);
  } catch (e) {
    console.log(e);
  }
});

/**
 * * Delete
 */
app.delete("/tweets/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTweet = await Tweet.findByIdAndDelete(id);
    res.send(deletedTweet);
  } catch (e) {
    console.log(e);
  }
});


/**
 * * Add Comment
 */
app.put('/tweets/add-comment/:id', async (req, res) => {
    const {id} = req.params;
    const tweet = await Tweet.findById(id);
    console.log(tweet);
    tweet.comments.push(req.body);
    const updatedTweet = await Tweet.findByIdAndUpdate(id, tweet, {new: true});
    res.send(updatedTweet);
});


/**
 * * Increase Likes
 */
app.get('/api/tweets/add-like/:id', async (req, res) => {
    const {id} = req.params;
    // find the tweet to update
    const tweetToUpdate = await Tweet.findById(id);
    // increase the likes
    tweetToUpdate.likes++;
    // update the tweet with the new data
    const updatedTweet = await Tweet.findByIdAndUpdate(id, tweetToUpdate, {new: true});
    res.send(updatedTweet);
});

/**
 * Seed Route
 */
app.get("/api/tweets/seed", async (req, res) => {
  const createdTweets = await Tweet.insertMany(manyTweets);
  res.send(createdTweets);
});

//* Listening and connecting to db
connectDB();
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
