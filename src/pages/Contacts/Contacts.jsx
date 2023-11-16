import ContactForm from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import {Container} from 'components/Conteiner/Conteiner';
import { ContactList } from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
// import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ColorRing } from 'react-loader-spinner';

import css from './Contacts.module.css';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <p className={css.total}>
        Total contacts in phonebook:
        <span className={css.total_count}> {count}</span>
      </p>
      <Filter />
      {isLoading ? 
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{ position: "absolute",left: "50%",top: "69%",transform:" translate(-50%,-50%)"}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#4bb36a', '#80bb3d']} />
           : <ContactList />
      }
      {error && <p className={css.errorMessage}>An error occurred: {error}</p>}
    </Container>
  );
}
