let _authService=null;

class AuthController{
    constructor({AuthService}){
        _authService=AuthService;
    }

    async signUp(req, res){
        const { body } = req;
        const userCreated = await _authService.signUp(body);
        return res.status(201).send(userCreated);
    }

    async signIn(req, res){
        const { body } = req;
        const credenciales = await _authService.signIn(body);
        return res.send(credenciales);
    }
}

module.exports= AuthController;