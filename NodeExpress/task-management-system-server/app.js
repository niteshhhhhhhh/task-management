import express from 'express'
import cors from 'cors'
import TaskModel from './TaskModel.js'  

const app = express()
app.use(express.json())
app.use(cors())    
const taskRouter = express.Router()



app.use('/api/task', taskRouter)
taskRouter.post('/', async (req, res) => {
    const {name} = req.body
            const task = await new TaskModel({name}).save()
            res.status(201).send({
              message: "Task added successfully",
              task
            })
})
export default app
