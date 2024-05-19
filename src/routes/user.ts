// src/routes/user.ts
import { Router } from 'express';
import Grocery from '../models/grocery';

const router = Router();

// View available grocery items
router.get('/grocery', async (req, res) => {
  const groceries = await Grocery.find();
  res.send(groceries);
});

// Book multiple grocery items
router.post('/order', async (req, res) => {
  const { items } = req.body; // Assume items is an array of { id, quantity }
  const order = await Promise.all(items.map(async ({ id, quantity }: { id: string, quantity: number }) => {
    const grocery = await Grocery.findById(id);
    if (grocery) {
      if (grocery.inventory < quantity) {
        throw new Error(`Not enough inventory for ${grocery.name}`);
      }
      grocery.inventory -= quantity;
      await grocery.save();
      return { grocery, quantity };
    } else {
      throw new Error(`Grocery item with id ${id} not found`);
    }
  }));

  res.status(201).send(order);
});

export default router;
