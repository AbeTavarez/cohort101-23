const React = require("react");
const DefaultLayout = require("./Layout/Default");

function Index({ tweets }) {
  return (
    <DefaultLayout title="Tweets">
      <nav>
        <a href="/tweets/new">Create a new Tweet</a>
      </nav>

      <ul>
        {tweets.map((tweet) => {
          return (
            <li key={tweet._id} className="border p-5">
              <a href={`/tweets/${tweet._id}`}>{tweet.title}</a>
              <p>{tweet.body}</p>
              <p>{tweet.author}</p>
              <span>Likes: {tweet.likes}</span>

              <br />
              <span>{tweet.sponsored ? 'Sponsored': ''}</span>

              <br />
              <a href={`/tweets/${tweet._id}/edit`}>Edit Tweet</a>

              <form method="POST" action={`/api/tweets/${tweet._id}?_method=DELETE`}>
                <input type="submit" value="Delete"/>
              </form>
            </li>
          );
        })}
      </ul>
    </DefaultLayout>
  );
}
module.exports = Index;