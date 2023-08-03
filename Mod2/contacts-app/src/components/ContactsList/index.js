import { useContext } from "react";
import { ContactsContext } from "../../context/contactsContext";
import ContactItem from "../ContactItem";

function ContactsList() {
  //* UseContext
  const contactsCtx = useContext(ContactsContext);
  const { contacts } = contactsCtx;

  return (
    <div>
      <h2>Contacts List</h2>

      <>
        {contacts ? (
          contacts.map((item) => <ContactItem key={item.id} contact={item}/>)
        ) : (
          <h3>No contacts found</h3>
        )}
      </>


    </div>
  );
}

export default ContactsList;
