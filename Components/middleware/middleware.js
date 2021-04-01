const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors=require('cors')



const middleware=[
    morgan('dev'),
    cors(),
    bodyParser.urlencoded({extended:true}),
]

module.exports=middleware;