import'express-async-errors'
import express, { Application, json } from 'express'
import userRoutes from './routers/users.routes'
import loginRouter from './routers/login.routes'
import { handleErrors } from './error'


const app: Application = express()
app.use(express.json())
app.use('/users',userRoutes)
app.use('/login',loginRouter)
app.use(handleErrors)

export default app
