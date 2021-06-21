const { Router } = require('express');
const { CACHE_TIME } = require('../helpers');
const { AuthMiddleware, ParseIntMiddleware, CacheMiddleware} = require('../middlewares')


module.exports=function({UserController}){
    const router = Router();

    router.get("", [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)] ,UserController.getAll);    
    router.get("/:userId",UserController.get);
    router.get("/:username",UserController.getUserByUsername);
    router.patch("/:userId",UserController.update);
    router.delete("/:userId",UserController.delete);

    return router;
}