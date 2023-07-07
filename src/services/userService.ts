import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class UserService {

    constructor() {
        console.log('inja')
    }

    public users() {
        return 'hello';
    }
}