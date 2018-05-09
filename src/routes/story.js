import express from 'express'
import { 
    addStory, 
    deleteStory, 
    getStory, 
    listStories, 
    updateStory 
} from '../controllers/story'

const app = express.Router()

app
    .route('/stories')
        .get(listStories)
        .post(addStory)
app
    .route('/stories/:id')
        .get(getStory)
        .put(updateStory)
        .delete(deleteStory)

    
export default app
