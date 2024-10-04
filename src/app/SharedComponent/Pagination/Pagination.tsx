import React from "react";

const Pagination: React.FC = () => {
  return (
    <>
      {/* Pagination Nav */}
      <nav>
        <ul className="flex">
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
              aria-label="Previous"
            >
              <span className="material-icons text-sm">keyboard_arrow_left</span>
            </a>
          </li>
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full  bg-blue-500 p-5 text-sm text-white shadow-md transition duration-150 ease-in-out"
              href="#"
            >
              1
            </a>
          </li>
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
              aria-label="Next"
            >
              <span className="material-icons text-sm">keyboard_arrow_right</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Footer */}
 

      {/* External Styles and Scripts */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
    </>
  );
};

export default Pagination;
