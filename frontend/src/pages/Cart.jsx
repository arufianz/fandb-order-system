function Cart({cartItems, onCheckout}) {
 const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div>
      <h3>Cart</h3>
      {cartItems.map(c => (
        <div key={c.id}>
    {c.name} ({c.qty}x) - {c.price * c.qty} IDR
    </div>
      ))}
      <p>Total: Rp {total}</p>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
}

export default Cart