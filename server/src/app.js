import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/index.js'
import path from 'node:path'

dotenv.config()

const app = express()

// Habilita CORS e JSON
app.use(cors())
app.use(express.json())

// Rotas de API
app.use('/', routes)
app.use('/obras', routes)
app.use('/exposicoes', routes)
app.use('/perfil', routes)
app.use('/contato', routes)

// Servindo arquivos estáticos (imagens)
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'src/public/images')))

// Tratamento de Erro 404
app.use((req, res) => {
  res.status(404).json({ message: 'Página não encontrada' })
})

export default app
