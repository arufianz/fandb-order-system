import Button from "./Button";

function MenuItem({ item, onAdd, onRemove, quantity}) {
	return(
    <div>
      <span>{item.category} {item.name} - Rp {item.price}</span>
      <Button onClick={() => onRemove(item.id)}>-</Button>
      <span>{quantity}</span>
      <Button onClick={() => onAdd(item.id)}>+</Button>
    </div>
	)
};

export default MenuItem;