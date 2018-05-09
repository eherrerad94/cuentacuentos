import mongoose, { Schema } from 'mongoose'

const StorySchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    content: { type: String }    
})

export default mongoose.model('Story', StorySchema)
