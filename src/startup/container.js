const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config
const config = require('../config')
const app = require('.')

//Services
const { AuthService ,HomeService, UserService, IdeaService, CommentService }= require('../services')

//Controllers
const { AuthController,HomeController, UserController, IdeaController, CommentController } = require('../controllers')

//Routes
const { AuthRoutes,HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes } = require('../routes/index.routes')
const Routes =require('../routes')

//Models
const { Comment,Idea,User } = require('../models')

//Repositories
const {UserRepository,IdeaRepository,CommentRepository} = require('../repositories')

const container = createContainer();
container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
}).register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment:asValue(Comment)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
});

module.exports= container;