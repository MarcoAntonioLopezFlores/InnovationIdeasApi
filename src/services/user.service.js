const BaseService = require('./base.service')

let _userRepository=null;

class UserService extends BaseService{
    constructor({UserRepository}){
        super(UserRepository)
        _userRepository=UserRepository;
    }

    async getUserByUsername(username){
        if(!username){
            const error = new Error();
            error.status = 400;
            error.message="username must be sent";
            throw error;
        }

        const user = await _userRepository.getUserByUsername(username);

        if(!user){
            const error = new Error();
            error.status = 404;
            error.message="user does not found";
            throw error;
        }

        return user;
    }
}

module.exports=UserService;