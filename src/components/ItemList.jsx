import { CDN_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m4 border-gray-300 border-b  text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <button className="px-4 py-1 bg-white border rounded-lg absolute mt-24 ml-10">
                Add+
              </button>
              <img
                className="rounded-lg"
                alt="res-logo"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
//};

export default ItemList;
