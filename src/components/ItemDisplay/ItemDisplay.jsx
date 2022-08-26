import ItemCard from "./ItemCard";

const ItemDisplay = () => {
  return (
    <>
      <div className="container">
        <div className="itemCard">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Our Items
          </h1>
          <ItemCard />
        </div>
      </div>
    </>
  );
};

export default ItemDisplay;
