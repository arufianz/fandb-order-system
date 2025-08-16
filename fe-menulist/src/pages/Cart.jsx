import Button from "../components/Button";

function Cart({cartItems, onCheckout}) {
 const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div>
      <h3>Cart</h3>
      {cartItems.map(c => (
        <div key={c.id}>
    {c.category} {c.name} ({c.qty}x) - {c.price * c.qty} IDR
    </div>
      ))}
      <p>Total: Rp {total}</p>
      <Button 
      onClick={onCheckout}
      buttonType={"primary"}
        >Checkout</Button>
    </div>
  );
}

export default Cart