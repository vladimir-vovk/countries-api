import express from 'express'
import { countries } from './api'

const app = express()
const PORT = process.env.PORT || 5000

app.use('/countries', countries)

app.use('*', (req, res) => {
  res.json({ 'Available routes': ['countries'], 'Available params': ['limit', 'offset'] })
})

app.listen(PORT, () => console.log(`Listening on ${PORT}...`))
