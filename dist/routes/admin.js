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
// src/routes/admin.ts
const express_1 = require("express");
const grocery_1 = __importDefault(require("../models/grocery"));
const router = (0, express_1.Router)();
// Add new grocery item
router.post('/grocery', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, inventory } = req.body;
    const grocery = new grocery_1.default({ name, price, inventory });
    yield grocery.save();
    res.status(201).send(grocery);
}));
// View existing grocery items
router.get('/grocery', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const groceries = yield grocery_1.default.find();
    res.send(groceries);
}));
// Remove grocery item
router.delete('/grocery/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield grocery_1.default.findByIdAndDelete(id);
    res.status(204).send();
}));
// Update grocery item
router.put('/grocery/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, price, inventory } = req.body;
    const grocery = yield grocery_1.default.findByIdAndUpdate(id, { name, price, inventory }, { new: true });
    res.send(grocery);
}));
exports.default = router;
