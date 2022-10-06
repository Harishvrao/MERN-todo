require('dotenv').config()

module.exports ={
    PORT : process.env.PORT,
    MONGODB_LOCAL_URL : process.env.MONGODB_LOCAL_URL,
    MONGODB_CLOUD_URL : process.env.MONGODB_CLOUD_URL,
    NODE_ENV : process.env.NODE_ENV,
}