const app = require('./app')
const dotenv = require('dotenv');
dotenv.config();





app.listen(3000, () => {
  console.log('Server is running at the port 3000')
})