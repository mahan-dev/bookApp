import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const Books = ({ data, handleLikedBook }) => {
  const { image, title, author, pages, language } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedBook(data, like);
    setLike((like) => !like);
  };

  return (
    <section className="books_wrapper">
        <img
          className="rounded-lg mr-3 max-sm:w-[60px] max-sm:mr-10"
          src={image}
          alt=""
          width={70}
        />
        <div className="flex flex-col w-full justify-between max-sm:text-[1rem]">
          <p>{title}</p>
          <p className="text-[1rem]  w-full">{author}</p>
          <div className="flex flex-col  mr-[1rem] w-full max-md:text-[0.9rem]">
            <p className="text-[#acacac] mr-3 max-sm:text-[1rem]">{pages} pages</p>
            <p className="text-[#acacac] max-sm:text-[1rem]">{language}</p>
          </div>
        </div>
        <button
          type="submit"
          className=" flex self-start hover:scale-110"
          onClick={likeHandler}
        >
          <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
        </button>
    </section>
  );
};

export default Books;
