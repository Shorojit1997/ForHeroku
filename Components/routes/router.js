const newsinfo=require('./newsinfo');
const users=require('./users')



const routes=[
    {
        path:'/users',
        handeler:users
    },
    {
        path:'/news',
        handeler:newsinfo
    }

]

const setRoutes=app=>{
    routes.map(route=>{
        app.use(route.path,route.handeler)
    })
}
module.exports=setRoutes;