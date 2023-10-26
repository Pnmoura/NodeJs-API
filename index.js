const express = require('express')
const mongoose = require('mongoose')
const app = express()


// Forma de ler o JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {
  res.json({ message: "Hello world com node (GET)" })
})

app.post('/', (req, res) => {
  res.json({ message: "Hello world com node (POST)" })
})

// entregar uma porta
const DB_USER = 'pgnunesmoura'
const DB_PASSWORD = encodeURIComponent('mNvZS43OGdGIfTdy')


mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.dyg5al1.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Conectamos ao MongoDB!")
      app.listen(3000)
    })
    .catch((err) => console.log(err))
    
    