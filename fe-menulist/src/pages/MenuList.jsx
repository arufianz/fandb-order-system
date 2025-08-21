import Button from "../components/Button"
import MenuItem from "../components/MenuItem"
import Cart from "./Cart"
import { useState, useEffect } from "react";

function MenuList(){
  const [filter, setFilter] = useState("Semua");
  const [menu, setMenu] = useState([]);

  const [time, setTime] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/time`)
      .then(res => res.json())
      .then(data => setTime(data));
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/menu`)
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

  const [cart, setCart] = useState([]);


 const addToCart = (id) => {
    setCart(prev => {
      const item = menu.find(m => m.id === id);
      const existing = prev.find(c => c.id === id);
      if (existing) {
        return prev.map(c => c.id === id ? { ...c, qty: c.qty + 1 } : c);
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      return prev
        .map(c => c.id === id ? { ...c, qty: c.qty - 1 } : c)
        .filter(c => c.qty > 0);
    });
  };

    const checkout = () => {
    alert("Checkout berhasil!");
    setCart([]);
  };

  const categories = ["Semua", "KARAAGE", "OPPA", "PIZZA"];

	return(
		<div className="flex flex-col min-w-screen justify-center">
      <nav className="flex justify-center">
        {categories.map(cat => (
        <Button 
          key={cat} 
          onClick={() => setFilter(cat)}
          buttonType="primary"
          isActive={filter === cat}>
        {cat}
        </Button>
    ))}
      </nav>
      <section className="mt-4 m-4  grid max-w-2xl grid-rows-1 gap-3">
        {menu.filter(item => filter === "Semua" || item.category === filter)
        .map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            isFilterOn={filter !== "Semua"}
            onAdd={addToCart}
            onRemove={removeFromCart}
            quantity={cart.find(c => c.id === item.id)?.qty || 0}
          />
        ))}
      </section>
      <p>{time}</p>
      <Cart cartItems={cart} onCheckout={checkout} />
    </div>
	)
}

export default MenuList