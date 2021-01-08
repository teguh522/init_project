require('dotenv').config()
const { urlencoded } = require('express')
const express = require('express')

const handle = require('./handler/errorreport')
const route = require('./routes')
const app = express()
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/entitas', route.getentitas)

app.use((req, res, next) => {
    let err = new Error('Tidak ditemukan')
    err.status = 404
    next(err)
})
app.use(handle.error)
app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port ${process.env.PORT}`);
})