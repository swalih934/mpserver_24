//importing j-son surver

const jsonserver=require('json-server')
//creating server

const mpServer=jsonserver.create()
//initialising middleware
const middleware=jsonserver.defaults()
//creating router instance for resources
const router=jsonserver.router('db.json')
//configuring middleware and router to serever
mpServer.use(middleware)
mpServer.use(router)
//setting port number
const PORT=3000 || process.env.PORT

//calling listen method with server for activating server
mpServer.listen(PORT,()=>{
    console.log("server running at PORT:"+PORT);
    
}
)