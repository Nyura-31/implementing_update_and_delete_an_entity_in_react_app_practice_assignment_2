import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} />
      ))}
    </>
  );
};

export default ItemList;