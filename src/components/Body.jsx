import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchInputData, setSearchInputData] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5995992&lng=73.77352619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json(data);

    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const handleFilter = () => {
    const topRes = resData.filter((a) => {
      return Number(a.info.avgRating) >= 4.3;
    });

    setFilteredRes(topRes);
  };

  const handleSearch = async () => {
    const searchResult = resData.filter((data) => {
      return data.info.name
        .toLowerCase()
        .includes(searchInputData.toLowerCase());
    });

    setFilteredRes(searchResult);
  };

  return filteredRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            value={searchInputData}
            onChange={(e) => setSearchInputData(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resInfo={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
