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
// import { User } from '../models/User';
const router = express_1.default.Router();
// GET /users
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const users = await User.find();
        // res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// GET /users/:id
router.get('/:id', getUser, (req, res) => {
    // res.json(res.user);
});
// POST /users
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    try {
        // const newUser = await user.save();
        // res.status(201).json(newUser);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// PUT /users/:id
router.put('/:id', getUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // if (req.body.name != null) {
    //     res.user.name = req.body.name;
    // }
    //
    // if (req.body.email != null) {
    //     res.user.email = req.body.email;
    // }
    //
    // if (req.body.password != null) {
    //     res.user.password = req.body.password;
    // }
    try {
        // const updatedUser = await res.user.save();
        // res.json(updatedUser);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// DELETE /users/:id
router.delete('/:id', getUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await res.user.remove();
        res.json({ message: 'User deleted' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
function getUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let user;
        try {
            // user = await User.findById(req.params.id);
            if (user == null) {
                return res.status(404).json({ message: 'Cannot find user' });
            }
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
        // res.user = user;
        next();
    });
}
exports.default = router;
//# sourceMappingURL=userRoutes.js.map