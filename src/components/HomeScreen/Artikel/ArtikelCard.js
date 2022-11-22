import React, { useEffect, useState } from "react";
import axios from "axios";

const ArtikelCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&pageSize=3&apiKey=10690fd01ab64ca5ac1cefb2dc011fc1"
      )
      .then((response) => {
        setPosts(response.data.articles);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {posts.map((post, id) => {
        return (
          <div
            className="group flex cursor-pointer flex-col h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg"
            key={id}
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={post.urlToImage}
                alt=""
                className="w-full h-full overflow-y-auto object-center transition-all duration-300 transform group-hover:scale-110"
              />
            </div>

            <div className="my-6 py-3 px-8 flex flex-col justify-around items-center">
              <h2 className="title-font text-2xl text-center font-bold text-gray-800 antialiased">
                {post.title}
              </h2>

              <p className="line-clamp-8 py-5 overflow-hidden leading-relaxed text-sm text-gray-500 text-left font-medium cursor-pointer">
                {post.description}
              </p>

              <a
                href={post.url}
                target="_blank"
                className="self-start p-2 bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent font-medium no-underline transform hover:scale-105"
              >
                Read more
              </a>
            </div>

            <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
              <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.author}
              </span>

              <span className="py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {post.publishedAt}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArtikelCard;
