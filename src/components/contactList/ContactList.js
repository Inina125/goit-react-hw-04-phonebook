import PropTypes from 'prop-types';
import { DeleteBtn, Item, ListCont } from './ContactList.styled';

const ContactList = ({ filter, deleteContact, contacts }) => {
  let contactItems = contacts;
  if (filter) {
    contactItems = contactItems.filter(item => item.name.includes(filter));
  }

  return (
    <ListCont>
      {contactItems.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <DeleteBtn onClick={() => deleteContact(contact.id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </ListCont>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
