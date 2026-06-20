import { useState } from "react";

const MenuList = ({ cards }) => {
  const [accordinVisiblity, setAccordianVisiblity] = useState(true);
  if (!cards?.length) return null;

  return (
    <>
      {cards.map((card) => (
        <div key={card.card.card.title} className="accordian">
          <h4>{card.card.card.title}</h4>

          <ul>
            {card?.card?.card?.itemCards?.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs.
                {(item.card.info.defaultPrice || item.card.info.finalPrice) /
                  100}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default MenuList;
