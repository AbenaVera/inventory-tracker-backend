const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
  { itemName: "Apple", quantity: 10, price: 100 },
  { itemName: "Milk", quantity: 5, price: 80 },
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
    const newItems = req.body;
    items.push(newItems);
    res.json(newItems);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

