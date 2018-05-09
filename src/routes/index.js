import express from 'express'
import Category from './category'
import Story from './story'
import User from './user'

const app = express.Router()

const API = '/api/v1'

app.get(API, (req, res) => {
    res.send(API)
})
// app.use(API, Category)
// app.use(API, Story)
// app.use(API, User)

export default app