import mongoose, { Schema } from 'mongoose';

const CategorySchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String }
})

export default mongoose.model('Category', CategorySchema)