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
            <div className="w-9/12 pr-4">
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
            <div className="w-3/12 flex justify-end">
              <div className="relative w-[120px] h-[120px] flex-shrink-0">
                {item.card.info.imageId ? (
                  <img
                    className="rounded-xl w-full h-full object-cover shadow-sm"
                    alt="res-logo"
                    src={CDN_URL + item.card.info.imageId}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-50 border border-dashed border-gray-200 rounded-xl" />
                )}
                <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-6 py-1 bg-white text-green-600 font-bold border border-gray-200 shadow-md rounded-lg text-sm hover:bg-gray-50 transition-all whitespace-nowrap">
                  Add+
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
//};

export default ItemList;
