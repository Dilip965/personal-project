import React from "react";
import { ExternalLink } from "lucide-react";

const books = [
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    year: 1997,
    link: "https://www.amazon.com/dp/1612680194",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Cashflow Quadrant",
    author: "Robert T. Kiyosaki",
    year: 2000,
    link: "https://www.amazon.com/dp/1612680054",
    image: "https://m.media-amazon.com/images/I/81t0uJYa7VL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: 1937,
    link: "https://www.amazon.com/dp/1585424331",
    image: "https://m.media-amazon.com/images/I/71UypkUjStL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    year: 2014,
    link: "https://www.amazon.com/dp/0804139296",
    image: "https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: 2020,
    link: "https://www.amazon.com/dp/0857197681",
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
  },
   {
    title: "How to Win Friends and Influence Peopley",
    author: "Dale Carnegie",
    year: 2020,
    link: "https://www.amazon.com/dp/0857197681",
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
  },

];

const BookList = () => {
  return (
    <div className="py-12 mt-9 px-6 sm:px-12 bg-gradient-to-b from-[#f5f7fa] to-[#e4e9f0] min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">💼 Wealth Building Books</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {books.map((book, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white/70 backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
          >
            <div className="h-64 overflow-hidden rounded-t-2xl">
             <div className="h-64 w-full flex items-center justify-center overflow-hidden rounded-t-2xl bg-white">
  <img
    src={book.image}
    alt={book.title}
    className="max-h-full max-w-full object-contain"
  />
</div>

            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
              <p className="text-gray-600 mt-1">by {book.author}</p>
              <p className="text-sm text-gray-400 mt-1">Published: {book.year}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow transition duration-200"
              >
                Buy on Amazon
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
