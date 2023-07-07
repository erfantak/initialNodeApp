"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userController_1 = __importDefault(require("./controllers/userController"));
const tsyringe_1 = require("tsyringe");
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.registerDependency();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.get('/users', this.userController.getUsers);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
    registerDependency() {
        this.userController = tsyringe_1.container.resolve(userController_1.default);
    }
}
const app = new App(3000);
app.start();
//# sourceMappingURL=app.js.map