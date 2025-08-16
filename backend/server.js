import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

//Midlleware
app.use(cors());
app.use(express.json());

//Data
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

//Routes
app.get('/menu', (req, res) => res.json(menuList));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));