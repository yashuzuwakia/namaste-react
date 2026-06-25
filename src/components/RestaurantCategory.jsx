import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ cards }) => {
  const [accordinVisiblity, setAccordianVisiblity] = useState(true);
  const [showItemList, setShowItemList] = useState(false);
  if (!cards?.length) return null;

  const itemList =
    cards.filter(
      (a) =>
        a.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];

  const nestedItemList =
    cards.filter(
      (a) =>
        a.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
    ) || [];

  const handleClick = () => {
    setShowItemList(!showItemList);
  };

  return (
    <>
      {itemList.map((item) => {
        return (
          <div className="bg-gray-100 w-6/12 shadow-lg p-4 mx-auto my-4">
            <div className="flex justify-between" onClick={handleClick}>
              <span className="font-bold text-lg">
                {item.card.card.title} ({item.card.card.itemCards.length})
              </span>
              <span>{showItemList ? "⬆️" : "⬇️"}</span>
            </div>

            {showItemList && <ItemList items={item.card.card.itemCards} />}
          </div>
        );
      })}
    </>
  );
};

export default RestaurantCategory;
