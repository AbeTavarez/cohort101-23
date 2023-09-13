const express = require("express");
const sequelizeDB = require("./utils/db");
const User = require("./models/User");

const app = express();
const PORT = 4000;

// middleware
app.use(express.json());

// Routes

// GET
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

// Find By Primary Key
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

// create
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

// PUT or Update
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.update({
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary,
    }, {
      where: {
        id: req.params.id,
      },
    });
    
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});


// Delete
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// =============
(async function () {
  try {
    // sync function will create a table for each of our models
    const result = await sequelizeDB.sync();
    console.log(result);

    // run the server
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
})();
