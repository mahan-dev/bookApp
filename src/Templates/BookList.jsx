
import { books } from "../constants/mockData";
import Books from "./Books";
import { useState } from "react";
import FavoriteBook from "./FavoriteBook";
import SearchBox from "./SearchBox";

const BookList = () => {
  const [bookData, setBookData] = useState(books);
  const [likeList, setLikeList] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikedBook = (book, status) => {
    if (status) {
      const newLikeList = likeList.filter((item) => item.id !== book.id);
      setLikeList(newLikeList);
    } else {
      setLikeList((like) => [...like, book]);
    }
  };

  const searHandler = () => {
    if (search) {
      const newbooks = bookData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setBookData(newbooks);
    } else {
      setBookData(books);
    }
  };

  return (
    <>
      <>
        <SearchBox
          search={search}
          searHandler={searHandler}
          setSearch={setSearch}
        />
      </>
      <section className="flex mt-5 max-sm:flex-col">
        <div className="card">
          {bookData.map((book) => (
            <Books
              key={book.id}
              handleLikedBook={handleLikedBook}
              data={book}
            />
          ))}
        </div>
        <section className="max-sm:flex max-sm:-order-1 max-sm:mb-4">
          {!!likeList.length && (
            <section className="wrapper_favoriteBook">
              <h5 className="font-semibold"> Favorites </h5>

              {likeList.map((favoriteBook) => (
                <FavoriteBook data={favoriteBook} key={favoriteBook.id} />
              ))}
            </section>
          )}
        </section>
      </section>
    </>
  );
};

export default BookList;
