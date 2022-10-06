const {connect, connection} = require('mongoose')
const { NODE_ENV, MONGODB_LOCAL_URL, MONGODB_CLOUD_URL } = require('.')

function dbConnect(){
    if(NODE_ENV === 'develpoment'){
        connect(MONGODB_LOCAL_URL,{useNewUrlParser: true})
        connection.on('connected', () => console.log('db connected to local database'))
        connection.on('disconnected',() => console.log('db disconnected'))
        connection.on('error', () => console.log('error occured while connecting to database', error.message))
    }else{
        connect(MONGODB_CLOUD_URL,{useNewUrlParser: true})
        connection.on('connected', () => console.log('db conneted to cloud database'))
        connection.on('disconnected',() => console.log('db disconnected'))
        connection.on('error', () => console.log('error while connecting to database', error.message))
    }
}

module.exports = dbConnect