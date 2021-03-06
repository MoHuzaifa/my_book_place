import { FaTimesCircle, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { deleteBookFromFirestore } from '../../firebase/firebase.utils';
import './BookDetailDrawerStyle.scss';

const BookDetailDrawer = ({
  bookId,
  isDrawerOpen,
  closeDrawer,
  bookName,
  bookGenre,
  bookAuthor,
  allBooks,
}) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  /**
   * A function that calls an async function in
   * firebase.utils to delete a selected book
   */
  const deleteBookHandler = () => {
    deleteBookFromFirestore(bookId, currentUser.id);
    closeDrawer();
  };

  return isDrawerOpen ? (
    <div className="drawer">
      <div className="drawer-icons">
        <div className="delete-book">
          <FaTrash className="delete-icon" onClick={deleteBookHandler} />
          <p className="delete-text" onClick={deleteBookHandler}>
            Delete
            {' '}
            <br />
            {' '}
            Book
          </p>
        </div>

        <FaTimesCircle className="close-button" onClick={closeDrawer} />
      </div>

      <h1 className="book-title">{bookName}</h1>
      <h3 className="book-genre">{bookGenre}</h3>
      <h3 className="book-author">{bookAuthor}</h3>
      <h3 className="all-books-heading">All books by this author</h3>
      <ul className="all-books">
        {allBooks?.length > 0 ? allBooks.map((book) => <li>{book}</li>) : ''}
      </ul>
    </div>
  ) : null;
};

export default BookDetailDrawer;
