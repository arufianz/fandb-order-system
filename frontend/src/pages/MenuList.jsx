import Button from "../components/Button"
import MenuItem from "../components/MenuItem"
import Cart from "./Cart"
import { useState } from "react";

function MenuList(){
  const [filter, setFilter] = useState("Semua");

	const menuList = [
		{ id:1, category: "KARAAGE", name: "Chicken Small", price: 8500},
    { id:2, category: "KARAAGE", name: "Chicken Jumbo", price: 12000 },
    { id:4, category: "KARAAGE", name: "Skin Small", price: 8500 },
    { id:3, category: "KARAAGE", name: "Skin Jumbo", price: 12000 },
    { id:5, category: "KARAAGE", name: "Mushroom Small", price: 8500 },
    { id:6, category: "KARAAGE", name: "Mushroom Jumbo", price: 12000 },
    { id:7, category: "KARAAGE", name: "Nugget Small", price: 8500 },
    { id:8, category: "KARAAGE", name: "Nugget Jumbo", price: 12000 },
    { id:9, category: "OPPA", name: "Original", price: 10000  },
    { id:10, category: "OPPA", name: "Blueberry", price: 10000 },
    { id:11, category: "OPPA", name: "Cokelat", price: 10000  },
    { id:12, category: "OPPA", name: "Matcha", price: 12000  },
    { id:13, category: "OPPA", name: "Tiramisu", price: 12000  },
    { id:14, category: "PIZZA", name: "Mushroom Corn", price: 15000,  },
    { id:15, category: "PIZZA", name: "Paprika Mushroom", price: 15000,  },
    { id:16, category: "PIZZA", name: "Pepperoni Mushroom", price: 17000,  },
    { id:17, category: "PIZZA", name: "Paprika Cheese", price: 15000, },
    { id:18, category: "PIZZA", name: "Sausage Corn", price: 17000  },
	]
  const [cart, setCart] = useState([]);


 const addToCart = (id) => {
    setCart(prev => {
      const item = menuList.find(m => m.id === id);
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
		<div className="grid place-items-center min-h-screen">
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
      <section className="mt-4 m-4 grid max-w-2xl grid-rows-1 gap-3">
        {menuList.filter(item => filter === "Semua" || item.category === filter)
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
      <Cart cartItems={cart} onCheckout={checkout} />
    </div>
	)
}

export default MenuList