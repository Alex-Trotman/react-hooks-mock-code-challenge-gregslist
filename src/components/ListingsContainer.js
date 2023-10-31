import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((items) => {
        console.log(items);
        setItems(items);
      });
  }, []);
  console.log("ITEMS", items);

  return (
    <main>
      <ul className="cards">
        {items.map((item) => {
          return (
            <ListingCard
              description={item.description}
              image={item.image}
              location={item.location}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
