import express from 'express'
import { 
    addUser, 
    deleteUser, 
    getUser, 
    listUsers, 
    updateUser 
} from '../controllers/user'

const app = express.Router()

app
    .route('/users')
        .get(listUsers)
        .post(addUser)   
app
    .route('/users/:id')
        .get(listUsers) 
        .get(getUser)
        .put(updateUser)
        .delete(deleteUser)
    
export default app
