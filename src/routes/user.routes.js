const { Router } = require('express');

module.exports=function({UserController}){
    const router = Router();

    router.get("",UserController.getAll);    
    router.get("/:userId",UserController.get);
    router.get("/:username",UserController.getUserByUsername);
    //router.post("/",UserController.create);
    router.patch("/:userId",UserController.update);
    router.delete("/:userId",UserController.delete);

    return router;
}