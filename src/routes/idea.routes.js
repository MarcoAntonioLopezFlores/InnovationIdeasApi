const { Router } = require('express');
const { ParseIntMiddleware } = require('../middlewares');

module.exports=function({IdeaController}){
    const router = Router();

    router.get("",ParseIntMiddleware,IdeaController.getAll);
    router.get("/:ideaId",IdeaController.get);
    router.get("/:authorId/all",IdeaController.getIdeasByAuthor);
    router.post("/",IdeaController.create);
    router.patch("/:ideaId",IdeaController.update);
    router.delete("/:ideaId",IdeaController.delete);
    router.post("/upvote/:ideaId",IdeaController.upVoteIdea);
    router.post("/downvote/:ideaId",IdeaController.downVoteIdea);

    return router;
}