const React = require("react");
const DefaultLayout = require("./Layout/Default");

function New() {
  return (
    <DefaultLayout title="Create new tweet">
        <h2>Create a new Tweet</h2>
      <form action="/api/tweets" method="POST">

        Title: <input type="text" name="title" required />

        Author: <input type="text" name="author" required />

        <textarea name="body" required></textarea>

        <input type="submit" value="Post"/>
      </form>
    </DefaultLayout>
  );
}

module.exports = New;
