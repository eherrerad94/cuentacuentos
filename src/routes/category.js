import express from 'express'
import { 
    addCategory, 
    deleteCategory,
    getCategory, 
    listCategories, 
    updateCategory 
} from '../controllers/category'

const app = express.Router()

app
    .route('/categories')
        .get(listCategories)
        .post(addCategory)
app
    .route('/categories/:id')
        .get(getCategory)
        .put(updateCategory)
        .delete(deleteCategory)

    
export default app
