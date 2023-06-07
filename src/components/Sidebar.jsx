import React from "react";
import { RiHeartFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";

const Sidebar = ({ onFilterFavorite, onShowAll, onFilterCompleted }) => {
  return (
    <div className="sidebar fixed bottom-0 w-full h-auto p-4 lg:w-64 lg:h-screen lg:static bg-gray-100 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div
        className="all-filter cursor-pointer hover:bg-gray-200 p-2 rounded transition mt-2"
        onClick={onShowAll}
      >
        <RiHeartFill className="inline-block mr-2" />
        Show All
      </div>
      <div
        className="favorite-filter cursor-pointer hover:bg-gray-200 p-2 rounded transition"
        onClick={onFilterFavorite}
      >
        <AiFillStar className="inline-block mr-2" />
        Favorites
      </div>
      <div
        className="completed-filter cursor-pointer hover:bg-gray-200 p-2 rounded transition"
        onClick={onFilterCompleted}
      >
        <TiTick className="inline-block mr-2" />
        Completed
      </div>
    </div>
  );
};

export default Sidebar;
