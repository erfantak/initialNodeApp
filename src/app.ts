import "reflect-metadata";
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import UserController from './controllers/userController';
import { container } from "tsyringe"

class App {
    public app: Application;
    public port: number;
    public userController: UserController

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.registerDependency();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.app.get('/users', this.userController.getUsers)

    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }

    private registerDependency() {
        this.userController = container.resolve(UserController)
    }
}

const app = new App(3000);
app.start();