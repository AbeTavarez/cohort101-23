const React = require("react");

function Show({ tweet }) {
    
  return (
    <div>
      <div>{tweet.title}</div>
      <div>{tweet.author}</div>
      <div>{tweet.body}</div>
      <div>{tweet.sponsored ? 'Sponsored': ''}</div>
      <div>{new Date(tweet.createdAt).toLocaleDateString()}</div>
    </div>
  );
}

module.exports = Show;
