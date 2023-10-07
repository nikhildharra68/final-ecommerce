
const mongoose=require('mongoose')
const Product=require("./models/Product")

mongoose.connect("mongodb://127.0.0.1:27017/ecomm-careerbootcamp")
.then(()=>console.log("db connected successfully".blue))
.catch((err)=> console.log(err))

const products=[

    {
        name:"iphone 11",
        img:"https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80",
        price:70000,
        desc:"this is a new iphone with mind-blowing features"
    },
    {
        name:"Sennhieser",
        img:"https://images.unsplash.com/photo-1607859928694-44744cf8b230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VubmhlaXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:30000,
        desc:"this is a new headphones with mind-blowing features"
    },
    {
        name:"Nike shoes",
        img:"https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price:4000,
        desc:"this is a new iphone with mind-blowing features"
    },
    {
        name:"asus laptop",
        img:"https://images.unsplash.com/photo-1636211992838-251a43d72ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFzdXMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price:65000,
        desc:"this is a new iphone with mind-blowing features"
    },
    {
        name:"smart tv",
        img:"https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB0dnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:49090,
        desc:"this is a new iphone with mind-blowing features"
    },
    {
        name:"titan watches",
        img:"https://images.unsplash.com/photo-1637945837201-7ff6c00035d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGl0YW4lMjB3YXRjaGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price:25999,
        desc:"this is a new iphone with mind-blowing features"
    }, 
    {
        name:"vr headsets",
        img:"https://plus.unsplash.com/premium_photo-1675257062934-a8aef65604ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        price:116990,
        desc:"this is a new iphone with mind-blowing features"
    },
    {
        name:"Denim suits",
        img:"https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VpdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price:24555,
        desc:"this is a new iphone with mind-blowing features"
    },
    {
        name:"godrej furnitures",
        img:"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price:15789,
        desc:"this is a new iphone with mind-blowing features"
    }
]

async function seedProducts(){
    
    await Product.deleteMany({})// to clear previous dta from db  
    await Product.insertMany(products)
    console.log("products have been seeded successfully");
}
seedProducts();