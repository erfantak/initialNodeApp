import express, { Request, Response } from 'express';
// import { User } from '../models/User';

const router = express.Router();

// GET /users
router.get('/', async (req: Request, res: Response) => {
    try {
        // const users = await User.find();
        // res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /users/:id
router.get('/:id', getUser, (req: Request, res: Response) => {
    // res.json(res.user);
});

// POST /users
router.post('/', async (req: Request, res: Response) => {
    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });

    try {
        // const newUser = await user.save();
        // res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT /users/:id
router.put('/:id', getUser, async (req: Request, res: Response) => {
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
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE /users/:id
router.delete('/:id', getUser, async (req: Request, res: Response) => {
    try {
        // await res.user.remove();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getUser(req: Request, res: Response, next: Function) {
    let user;

    try {
        // user = await User.findById(req.params.id);

        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    // res.user = user;
    next();
}

export default router;