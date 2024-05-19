// src/routes/admin.ts
import { Router } from 'express';
import Grocery from '../models/grocery';

const router = Router();

// Add new grocery item
router.post('/grocery', async (req, res) => {
  const { name, price, inventory } = req.body;
  const grocery = new Grocery({ name, price, inventory });
  await grocery.save();
  res.status(201).send(grocery);
});

// View existing grocery items
router.get('/grocery', async (req, res) => {
  const groceries = await Grocery.find();
  res.send(groceries);
});

// Remove grocery item
router.delete('/grocery/:id', async (req, res) => {
  const { id } = req.params;
  await Grocery.findByIdAndDelete(id);
  res.status(204).send();
});

// Update grocery item
router.put('/grocery/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, inventory } = req.body;
  const grocery = await Grocery.findByIdAndUpdate(id, { name, price, inventory }, { new: true });
  res.send(grocery);
});

export default router;
