import express from 'express'
import cors from 'cors'
import { countries } from './api'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use('/countries', countries)

app.use('*', (req, res) => {
  res.json({ 'Available routes': ['countries'], 'Available params': ['limit', 'offset'] })
})

app.listen(PORT, () => console.log(`Listening on ${PORT}...`))
