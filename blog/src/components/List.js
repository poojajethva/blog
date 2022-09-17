import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initListings } from "../redux/actions";
import Loading from "./Loading";
import Search from "./Search";

function List() {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings);
  const [filteredData, setFilteredData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    listings.length === 0 && dispatch(initListings());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(listings)
  }, [listings])

  const searchHandler = (inputVal) => {
    const newList =  listings?.filter((list) => list.title.includes(inputVal));
    setFilteredData(newList);
    setIsSearch(true);
  }

  const clearSearchHandler = () => {
    setFilteredData(listings)
  }

  return (
    <>
      <h1>Welcome to Blog</h1>
      <Search searchHandler={searchHandler} clearSearchHandler={clearSearchHandler} />
      <ul className="listings">
        {filteredData?.length > 0 && filteredData?.map((listing) => (
          <li key={listing.id}>
            <Link to={`/post/${listing.id}`}>{listing.title}</Link>
          </li>
        ))}
        {filteredData?.length === 0 && <Loading text={isSearch ? "No Posts" : "Loading..."} />}
      </ul>
    </>
  );
}

export default List;
