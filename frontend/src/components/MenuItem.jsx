import Button from "./Button";

function MenuItem({ item, onAdd, onRemove, quantity, isFilterOn}) {

	const category = isFilterOn ? "" : item.category;

	return(
    <li className="grid grid-cols-3 gap-1 ">
      	<p className="my-auto text-sm">{category} {item.name} </p>
		<span className="ml-8 my-auto text-sm text-left">Rp. {item.price}</span>
		<div className= "flex justify-center my-auto text-sm">
			<Button onClick={() => onRemove(item.id)} buttonType="secondary">-</Button>
      		<span className="my-auto">{quantity}</span>
      		<Button onClick={() => onAdd(item.id)} buttonType="secondary">+</Button>
		</div>
    </li>
	)
};

export default MenuItem;