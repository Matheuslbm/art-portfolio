import express from 'express'

const router = express.Router()

// Rota Home
router.get('/', (req, res) => {
  res.json({ message: 'Bem vindo a home!' })
})

// Rota Obras
router.get('/obras', (req, res) => {
  const obras = [{ title: 'Obra 1' }]
  res.json({ message: 'Aqui estão as obras!' })
})

// Rota exposicoes
router.get('/exposicoes', (req, res) => {
  res.json({ message: 'Informações sobre exposições!' })
})

// Rota perfil (sobre mim)
router.get('/perfil', (req, res) => {
  res.json({ message: 'Perfil do artista!' })
})

// Rota contato
router.get('/contato', (req, res) => {
  res.json({ message: 'Formas de contato!' })
})

export default router
