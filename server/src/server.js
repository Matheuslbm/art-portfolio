import app from './app.js'

const PORT = process.env.PORT || 5000
const URL = process.env.URL

app.listen(3333, () => {
  console.log('servidor rodando em http://localhost:3333/')
})
