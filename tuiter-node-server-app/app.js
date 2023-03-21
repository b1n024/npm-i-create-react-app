import express from 'express'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitController from "./controllers/tuits/tuits-controller.js"

const app = express()
app.use(express.json());
TuitController(app)
HelloController(app)
UserController(app)
app.listen(4000)