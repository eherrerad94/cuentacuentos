import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    local: {
    	email: { type: String },
        password: { type: String },
    },
    facebook: {
		id: { type: String },
        token: { type: String },
        email: { type: String },
        name: { type: String }
    }
})

export default mongoose.model('User', UserSchema)