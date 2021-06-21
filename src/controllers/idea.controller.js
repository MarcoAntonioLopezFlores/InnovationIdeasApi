let _ideaService= null;

class IdeaController{
    constructor({ IdeaService }){
        _ideaService = IdeaService;
    }

    async get(req, res){
        const { ideaId }= req.params; 
        const idea = await _ideaService.get(ideaId)
        return res.send(idea);
    }

    async getAll(req,res){
        const ideas = await _ideaService.getAll();
        return res.send(ideas);
    }

    async getIdeasByAuthor(req, res){
        const {authorId} = req.params;
        const ideas = await _ideaService.getIdeasByAuthor(authorId);
        return res.send(ideas);
    }

    async update(req, res){
       const { body } = req;
       const { ideaId} = req.params;
       const updatedIdea = await _ideaService.update(ideaId, body);

       return res.send(updatedIdea);

    }

    async delete(req,res){
        const { ideaId }=req.params;
        const deletedIdea = await _ideaService.delete(ideaId);

        return res.send(deletedIdea)
    }

    async create(req,res){
        const {body}=req;
        const createdIdea= await _ideaService.create(body);

        return res.status(201).send(createdIdea)
    }

    async upVoteIdea(req,res){
        const { ideaId } = req.params;
        const updatedIdea = await _ideaService.upVoteIdea(ideaId);

        return res.send(updatedIdea);

    }

    async downVoteIdea(req,res){
        const { ideaId } = req.params;
        const updatedIdea = await _ideaService.downVoteIdea(ideaId);

        return res.send(updatedIdea);

    }
}

module.exports=IdeaController;