const dotenv = require('dotenv').config()

export default {
  port: process.env.APP_PORT || 3000,
  env: process.env.NODE_ENV || 'development'
}
