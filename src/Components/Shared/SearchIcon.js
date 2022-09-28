import React, { useState, useContext } from "react";
import { ProductsContext } from "../../App";

const SearchIcon = ({ showSearch, setShowSearch }) => {
  const { products, setProducts } = useContext(ProductsContext);
  const [searchResult, setSearchResult] = useState([]);
  // console.log(products);
  const handleSearch = (searchword) => {
    // console.log(searchword);
    let matchedResult = products.filter((product) => {
      // console.log(product.stylename.toLowerCase().includes("g"))

      return product.stylename.toLowerCase().includes(searchword.toLowerCase());
    });
    setSearchResult(matchedResult);
    // console.log(matchedResult);
  };
  return (
    <div className="overlay-div">
      <div className="searchInput">
        <div>
          <div>
            <span onClick={() => setShowSearch(false)}>
              {" "}
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
          <div>
            <div>
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                placeholder="Search products.."
                className="inputSearch"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>

            <p className="category_name">Category</p>
          </div>
        </div>

        <div className="product_result">
          {searchResult.map((product, index) => (
            <div key={index}>
              <img alt="img" src={product.img} />
              <div>
                <p>{product.stylename}</p>
                <p>{product.price} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchIcon;
