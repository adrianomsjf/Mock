const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3333

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Mock Ativo!')
})

app.post('/login', (req, res) => {
   const {email, senha} = req.body
   if (email=='123@456.com' && senha == '123456') {
      res.send('OK')
   } else {
      res.status(404)
      res.send('Erro usuário/senha')
   }
})
 
app.listen(port, () => {
  console.log(`Mock listening on port ${port}`)
})