
const express=require("express")
const router=express.Router()
const User=require("../models/User")
const passport=require("passport")


router.get("/register",(req,res)=>{
    res.render("authentication/Signup")
})

// an example user
// router.get("/testUser",async(req,res)=>{

//     const user=new User({username: "nikhil",email:"nikhildharra68@gmail.com"})

//     const newUser=await User.register(user,"star9nikhil")

//     res.send(newUser)

// })

// register a new user from site
router.post("/register",async(req,res)=>{

    const {username, password, email}=req.body;

    const user=new User({username,email})
    const newUser=await User.register(user,password)

    req.flash("success","User registered successfully")

    res.redirect("/login")

})

router.get("/login",(req,res)=>{
    res.render("authentication/login")
})

router.post("/login",

    
    passport.authenticate("local",{

        failureRedirect:"/login",
        failureFlash:true,
        failureMessage:true
    }),
    function(req,res){
         req.flash("success",`Welcome back ${req.body.username.toUpperCase()}`)
         res.redirect("/products")
    }
)

router.get("/logout",(req,res)=>{

    req.logOut((err)=>{
        if(err) {return next(err)};

        req.flash("success","Goodbye! See you again.");
        res.redirect("/login");
    })
})



module.exports=router;
