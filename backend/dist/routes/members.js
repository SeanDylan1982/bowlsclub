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
const express_1 = __importDefault(require("express"));
const Member_1 = __importDefault(require("../models/Member"));
const router = express_1.default.Router();
// Get all members
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield Member_1.default.find();
        res.json(members);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching members' });
    }
}));
// Create a new member
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = new Member_1.default(req.body);
        const savedMember = yield member.save();
        res.status(201).json(savedMember);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating member' });
    }
}));
// Get a single member
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Member_1.default.findById(req.params.id);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json(member);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching member' });
    }
}));
// Update a member
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Member_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json(member);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating member' });
    }
}));
// Delete a member
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Member_1.default.findByIdAndDelete(req.params.id);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        res.json({ message: 'Member deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting member' });
    }
}));
exports.default = router;
