import Button from "./Button";

function MenuItem({ item, onAdd, onRemove, quantity, isFilterOn}) {

	const category = isFilterOn ? "" : item.category;

	return(
    <li className="flex justify-between py-auto">
      <p className="my-auto text-xl">{category} {item.name} </p>
			<span className="ml-auto mr-3 my-auto text-lg">Rp. {item.price}</span>
			<div>
			<Button onClick={() => onRemove(item.id)} buttonType="secondary">-</Button>
      <span>{quantity}</span>
      <Button onClick={() => onAdd(item.id)} buttonType="secondary">+</Button>
			</div>

    </li>
	)
};

export default MenuItem;