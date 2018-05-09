require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import { mongooseConnection } from './config/db-connection'
import { DB_CONFIG } from './keys/db-keys'
import routes from './routes'
import { mongo } from 'mongoose';

const app = express()
const DB = process.env.MONGODB_URI || DB_CONFIG.dev
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongooseConnection(DB)
// app.use(routes)

app.listen(PORT, (error) => {
    if(error) {
        console.log(`An error ocurred: ${error.message}`)
        process.exit(1)
    }
    console.log(`App running on port:${PORT}`)
})

export default app