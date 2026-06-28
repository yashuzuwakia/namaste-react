import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItemList, setShowIndex }) => {
  const handleClick = (title) => {
    setShowIndex();
    console.log(title);
  };
  return (
    <div className="bg-gray-100 w-6/12 shadow-lg p-4 mx-auto my-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setShowIndex()}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItemList ? "⬆️" : "⬇️"}</span>
      </div>
      <div className="transition-opacity"></div>
      {showItemList && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
