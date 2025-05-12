import React from "react";

const books = [
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    year: 1997,
    link: "https://www.amazon.com/dp/1612680194",
  },
  {
    title: "Cashflow Quadrant",
    author: "Robert T. Kiyosaki",
    year: 2000,
    link: "https://www.amazon.com/dp/1612680054",
  },
  {
    title: "The Business of the 21st Century",
    author: "Robert T. Kiyosaki",
    year: 2010,
    link: "https://www.amazon.com/dp/8184952922",
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: 1937,
    link: "https://www.amazon.com/dp/1585424331",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    year: 2014,
    link: "https://www.amazon.com/dp/0804139296",
  },
  {
    title: "The Millionaire Fastlane",
    author: "MJ DeMarco",
    year: 2011,
    link: "https://www.amazon.com/dp/0984358102",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: 2020,
    link: "https://www.amazon.com/dp/0857197681",
  },
];

const BookList = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Books That Shaped My Mindset</h2>
      <ul className="space-y-4">
        {books.map((book, index) => (
          <li key={index}>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border rounded-lg p-4 shadow-sm bg-white hover:shadow-md hover:bg-gray-50 transition"
            >
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-700">Author: {book.author}</p>
              <p className="text-gray-500 text-sm">Published: {book.year}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
