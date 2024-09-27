import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/index.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', routes)

//Erro 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint não encontrado ' })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Erro no servidor' })
})

export default app
