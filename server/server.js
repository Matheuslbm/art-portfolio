import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(3333, () => {
    console.log('HTTP server running in http://localhost:3333/')
})