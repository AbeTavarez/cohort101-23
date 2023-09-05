const React = require("react");

function Edit({tweet}) {
  return (
    <div>
        <h2>Edit Tweet</h2>
      <form action={`/api/tweets/${tweet._id}?_method=PUT`} method="POST">

        Title: <input type="text" name="title" defaultValue={tweet.title} required/>

        <textarea name="body" defaultValue={tweet.body} required></textarea>

        <input type="checkbox" name="sponsored" defaultChecked={tweet.sponsored} />

        <input type="submit" value="Update"/>
      </form>
    </div>
  );
}

module.exports = Edit;