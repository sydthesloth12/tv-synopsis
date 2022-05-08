const express = require('express')
const showdata = require('./showdata')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('home', { showdata })
})

app.get('/season/:number', (request, response) => {
  const season = showdata.seasons.find((season) => { return season.number === parseInt(request.params.number) })

  return response.render('season', { season })
})


app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 1337')
})
