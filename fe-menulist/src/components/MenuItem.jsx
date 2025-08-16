import Button from "./Button";

function MenuItem({ item, onAdd, onRemove, quantity, isFilterOn}) {

	const category = isFilterOn ? "" : item.category;
	let addButton = "+";
	let removeButton = "";

	if (quantity !== 0) {
		addButton = quantity;
	}


	return(
    <li className="grid grid-cols-3 gap-1 ">
      	<p className="my-auto text-sm">{category} {item.name} </p>
		<span className="ml-10 my-auto text-sm text-left">Rp. {item.price.toLocaleString("id-ID")}</span>
		<div className= "flex justify-end mr-5 my-auto text-sm">
			<Button onClick={() => onRemove(item.id)} qty={quantity} buttonType="secondary">-</Button>
      		{/* <span className="my-auto">{quantity}</span> */}
      		<Button onClick={() => onAdd(item.id)} buttonType="secondary-1">{addButton}</Button>
		</div>
    </li>
	)
};

export default MenuItem;