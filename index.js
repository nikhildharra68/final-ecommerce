const express = require("express");
const app = express();
const port = 8000;
const path=require("path")
const mongoose=require("mongoose")
const colors=require("colors")
const ejsMate = require("ejs-mate")
const methodOverride=require("method-override")
const session = require('express-session')
const flash=require('connect-flash')
const passport=require("passport")
const LocalStrategy=require("passport-local")
const User=require("./models/User")
const seedDb=require('./seed')

// const dbURL=process.env.dbURL || 'mongodb://127.0.0.1:27017/ecomm-careerbootcamp';
const dbURL="mongodb+srv://nikhildharra68:pdluOHbauw13gUDy@nikhildharra.trzpnsg.mongodb.net/Test?retryWrites=true&w=majority";

// mongoose.set('strictQuery',true)
mongoose.connect(dbURL)
.then(()=>console.log("db connected successfully".blue))
.catch((err)=> console.log(err))

const sessionConfig={
    secret: 'weneedagoodsecret',
    resave: false,
    saveUninitialized: true,
    cookie:{
        expire:Date.now()+7*24*60*60*1000
    }
}

// initialise a user to authenticate
passport.use(new LocalStrategy(User.authenticate()));
// searialise and deserialize for persisistent login
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
// Routes


const productRoutes=require("./routes/productRoutes")
const reviewRoutes=require("./routes/reviewRoutes")
const authRoutes=require("./routes/authRoutes")
const cartRoutes=require("./routes/cartRoutes")

app.engine("ejs",ejsMate)
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))


app.use(session(sessionConfig))
app.use(passport.authenticate('session'))
app.use(flash())


app.use((req,res,next)=>{
//    alert messages for success /error
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})



app.use("/products",productRoutes)
app.use(reviewRoutes)
app.use(authRoutes)
app.use(cartRoutes)

app.get("/",(req,res)=>{
    res.render("homepage")
})
// app.use("/app",productRoutes)
app.listen(port, (req,res) => 
{
    console.log(`Example app listening at http://localhost:8000`)
})