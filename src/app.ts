import express from 'express'
import 'dotenv/config'
import webRoutes from './routes/web'

const app = express()
const port = process.env.PORT || 3000

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//configure routes
webRoutes(app)

app.use(express.static('public')) // Serve static files from the 'public' directory

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Example app listening on port ${process.env.PORT}`)
})
