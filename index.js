// import json-server in index.js file 
const jsonServer=require('json-server')

// create a server for media player app
 const mediaPlayerServer = jsonServer.create()

// set up path/route from json file 
const router=jsonServer.router("db.json")

// Return middlewares user by JSON server 
const middlewares=jsonServer.defaults()

// set up port for running server 
const port=4000 || process.env.PORT

// use middleware and router in server 
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)


// to listern server for resolving request from client

mediaPlayerServer.listen(port,()=>{
    console.log(`Media player server sttarted at port ${port} ,and waiting for client Request!!!`);
})