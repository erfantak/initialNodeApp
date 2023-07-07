import { Request, Response } from 'express';
import { autoInjectable } from "tsyringe";
import UserService from "../services/userService";

@autoInjectable()
export default class UserController {
    // userService: UserService;

    constructor(
        private UserService?: UserService
    ) {
        // this.userService = UserService;
        console.log(UserService)
        // console.log(this.userService)

    }

    public async getUsers(req: Request, res: Response): Promise<void> {
        // console.log(this.userService)
        let users = await this.UserService.users()
        res.json('users');
    }

}
