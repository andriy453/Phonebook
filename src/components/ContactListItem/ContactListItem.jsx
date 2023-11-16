import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact,updateContact } from 'redux/contacts/operations';
import { AiOutlineDelete } from 'react-icons/ai';

import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subName, setSubName] = useState('');
  const [subNumber, setSubNumber] = useState('');
  const [subId, setSubId] = useState(null);
  const dispatch = useDispatch();
  const {name, number, id}=contact

  const showModal = (name, number, id) => {
    setSubNumber(number);
    setSubName(name);
    setSubId(id);
    setIsModalOpen(true);
  };


  const handleSave = () => {
    setIsModalOpen(false);
    dispatch(updateContact({ id: subId, name: subName, number: subNumber }));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen ?
        <div className={css.Backdrop} >
          <div className={css.ModalContent} >
            <h2 className={css.title}>Edit this contact</h2>
            <form  className={css.form}>
                <label className={css.label} >
                Name:
                <input
                   className={css.input}
                  type="text"
                  name="name"
                  value={subName}
                  onChange={e => {
                    setSubName(e.target.value);
                  }}
                />
                </label>
              <label className={css.label} >
                Number:
                <input
                   className={css.input}
                  type="tel"
                  name="number"
                  value={subNumber}
                  onChange={e => {
                    setSubNumber(e.target.value);
                  }}
                />
              </label>
              <div className={css.conteinerBtn}>
                <button  className={css.Btn} type="button" onClick={handleSave}>
                  Save
                </button>
                <button  className={css.Btn} type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form></div>
        </div> :
        <li className={css.list_item} key={id}>
          <div className={css.contact_wrp}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="rgb(58, 58, 147)" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
        {name} 
          </div>
          <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="rgb(58, 58, 147)" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>{number}</div>
          <div>
            <button      className={css.button_edit} type="button" onClick={() => showModal(name, number, id)}>
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path></svg>
              </button>
      <button
        className={css.button_delete}
        type="button"
        onClick={() => dispatch(deleteContact(id))} 
      >
        <AiOutlineDelete size={'1.5em'} />
            </button>
          </div>
      </li>}
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
