import { useParams, useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { editPost } from "../redux/slices/postsSlice";

export default function EditPostForm() {
  const { id } = useParams();
  
  // navigate the user back to the single post page
  const navigate = useNavigate();

  // gets data from redux global state
  const postToUpdate = useSelector((state) =>
    state.posts.find((post) => post.id === id)
  );

  // set post to local component state
  const [formData, setFormData] = useState(postToUpdate);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost(formData));
    navigate(`/posts/${id}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="content">Content: </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />

        <button>Edit Post</button>
      </form>
    </div>
  );
}
