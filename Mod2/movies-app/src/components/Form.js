import {useState} from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form (props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    console.log(event.target.value);
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchterm);
  };

  //The component must return some JSX
  return (
    <div className="mb-12">
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
          className="cursor-pointer mr-5 p-1"
          placeholder="movie title"
        />

        <input type="submit" value="submit" className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-5 py-1 rounded cursor-pointer hover:bg-cyan-400" required/>
      </form>
    </div>
  );
};