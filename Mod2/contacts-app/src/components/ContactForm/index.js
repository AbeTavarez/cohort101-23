import { useRef, useState, useContext } from "react";
import { ContactsContext } from "../../context/contactsContext";

function ContactForm() {
  //* using the Contacts Context
  const contactsCtx = useContext(ContactsContext);
  const { dispatch } = contactsCtx;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // stop browser from refreshing

    // create the new contact object
    const newContact = {...formData, id: new Date()};

    // send out a new action with the newContact data
    dispatch({type: 'add_contact', payload: newContact});

    // clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };  

  return (
    <div>
      <h2>Create new Contact</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />

        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div>
          <label>Phone: </label>
          <input
            type="text"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>

        <button>Create</button>
      </form>
    </div>
  );
}

export default ContactForm;
