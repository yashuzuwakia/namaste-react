import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5995992&lng=73.77352619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json(data);

    setResData(
      json.data.cards
        .map((card) => card.card.card.gridElements?.infoWithStyle?.restaurants)
        .filter((a) => a)
        .flat(),
    );
  };

  const handleFilter = () => {
    const topRes = resObj.filter((a) => {
      return Number(a.info.avgRating) >= 4.3;
    });

    setResData(topRes);
  };

  if (resData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      {console.log("rendering body")}
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {resData.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resInfo={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
