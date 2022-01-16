import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import morgan from 'morgan'

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') {

    app.use(morgan('dev'))
}

// allow to take JSON data
app.use(express.json())

// creating routes

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

// const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// if(process.env.NODE_ENV === 'production') {

//     app.use(express.static(path.join(__dirname, '/frontend/build')))

//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))

// } else {

//     app.get('/', (req, res) => {

//         res.send('API is running...')
//     })
// }

// not found
app.use(notFound)

// error middlewear
app.use(errorHandler)

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))