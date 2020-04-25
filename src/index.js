const app = require('./app')

const PORT = process.env.PORT



app.listen(3000, () => {
  console.log('Server is running at the port 3000')
})