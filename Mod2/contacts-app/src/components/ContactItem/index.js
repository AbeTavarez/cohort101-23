import { useContext } from "react";
import { ContactsContext } from "../../context/contactsContext";

function ContactItem(props) {
  console.log(props);

  const contactsCtx = useContext(ContactsContext);
  const {dispatch} = contactsCtx

  const { name, email, phone, id } = props.contact;
  return (
    <div>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <h5>{phone}</h5>
      <button onClick={() => dispatch({type: 'delete_contact', payload: id})}>Delete</button>
    </div>
  );
}

export default ContactItem;
