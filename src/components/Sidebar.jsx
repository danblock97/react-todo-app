import React, { useState } from "react";
import { RiHeartFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { AiFillStar, AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

const Sidebar = ({ onFilterFavorite, onShowAll, onFilterCompleted }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="lg:hidden absolute top-0 right-0 mt-4 mr-4 z-20"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <AiFillCloseCircle className="text-xl" />
        ) : (
          <AiOutlineMenu className="text-xl" />
        )}
      </button>
      <div
        className={`sidebar fixed h-screen top-0 left-0 bottom-0 w-full lg:w-64 p-4 lg:sticky bg-gray-100 dark:bg-black/80 shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Filters</h2>
        <div
          className="all-filter cursor-pointer hover:bg-gray-200 p-2 rounded transition mt-2 dark:text-white dark:hover:bg-gray-700"
          onClick={onShowAll}
        >
          <RiHeartFill className="inline-block mr-2 dark:text-white dark:hover:bg-gray-700" />
          Show All
        </div>
        <div
          className="favorite-filter cursor-pointer hover:bg-gray-200 p-2 rounded transition dark:text-white dark:hover:bg-gray-700"
          onClick={onFilterFavorite}
        >
          <AiFillStar className="inline-block mr-2 dark:text-white" />
          Favorites
        </div>
        <div
          className="completed-filter cursor-pointer hover:bg-gray-200 p-2 rounded transition dark:text-white dark:hover:bg-gray-700"
          onClick={onFilterCompleted}
        >
          <TiTick className="inline-block mr-2 dark:text-white" />
          Completed
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
