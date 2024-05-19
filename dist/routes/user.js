"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/user.ts
const express_1 = require("express");
const grocery_1 = __importDefault(require("../models/grocery"));
const router = (0, express_1.Router)();
// View available grocery items
router.get('/grocery', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const groceries = yield grocery_1.default.find();
    res.send(groceries);
}));
// Book multiple grocery items
router.post('/order', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { items } = req.body; // Assume items is an array of { id, quantity }
    const order = yield Promise.all(items.map(({ id, quantity }) => __awaiter(void 0, void 0, void 0, function* () {
        const grocery = yield grocery_1.default.findById(id);
        if (grocery) {
            if (grocery.inventory < quantity) {
                throw new Error(`Not enough inventory for ${grocery.name}`);
            }
            grocery.inventory -= quantity;
            yield grocery.save();
            return { grocery, quantity };
        }
        else {
            throw new Error(`Grocery item with id ${id} not found`);
        }
    })));
    res.status(201).send(order);
}));
exports.default = router;
