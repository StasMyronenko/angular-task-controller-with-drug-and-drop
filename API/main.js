// json-server API/db.json -m API/middlewares/userIdMiddleware.js ./node_modules/json-server-auth -r API/routes.json

const jsonServer = require('json-server')
const auth = require('json-server-auth')
const cors = require('cors')

const server = jsonServer.create()
const router = jsonServer.router('API/db.json')
const userIdMiddleware = require('./middlewares/userIdMiddleware')
const middlewares = jsonServer.defaults()

server.db = router.db

const routers = auth.rewriter({
  users: 600,
  boards: 660,
})

server.use(routers)

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

server.use(cors(corsOptions));

server.use(auth)
server.use(userIdMiddleware)
server.use(router)
server.use(middlewares)

server.use(jsonServer.bodyParser)





server.listen(3000, () => {
  console.log('JSON Server is running')
})
