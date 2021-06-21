class BaseRepository{

    constructor(model){
        this.model = model;
    }

    async get(id){
        return await this.model.findById(id);
    }

    async getAll(pageSize = 5, pageNumber = 1){
        // skip and limit, funciones mongoose
        const skips = pageSize*(pageNumber-1);
        return await this.model.find().skips(skips).limit(pageSize);
    }

    async create(entity){
        return await this.model.create(entity);
    }

    async update(id,entity){
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }

    async delete(id){
        return await this.model.findByIdAndDelete(id);
    }
}

module.exports=BaseRepository;