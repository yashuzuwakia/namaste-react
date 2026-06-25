import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [accordinVisiblity, setAccordianVisiblity] = useState(true);
  const [showItemList, setShowItemList] = useState(false);

  // const nestedItemList =
  //   cards.filter(
  //     (a) =>
  //       a.card.card["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
  //   ) || [];

  const handleClick = () => {
    setShowItemList(!showItemList);
  };

  return (
    <div
      className="bg-gray-100 w-6/12 shadow-lg p-4 mx-auto my-4"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItemList ? "⬆️" : "⬇️"}</span>
      </div>

      {showItemList && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
