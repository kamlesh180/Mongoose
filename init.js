const mongoose = require("mongoose");
const chat=require("./models/chat.js");

main ()
.then (()=> {
    console.log("conncetion successful");
})
.catch (err => {
    console.log(err);
});
async function main(){
await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChat=[
     {
    from:"Kamlesh",
    to :"Rahul",
    msg:"hey rahul , can you solve this problem",
    created_at:new Date()
    },
     {
    from:"Rakesh",
    to :"Vinodh",
    msg:"hey vinodh , can you teach me",
    created_at:new Date()
    },
     {
    from:"Raju",
    to :"Priya",
    msg:"hey priya , do you have a boyfriends",
    created_at:new Date()
    },
     {
    from:"Suraj",
    to :"Dimple",
    msg:"hey Dimple ,can you drink with me a cup of coffee",
    created_at:new Date()
    },
     {
    from:"Pawan",
    to :"Mohit",
    msg:" are you fine Mohit ?",
    created_at:new Date()
    },
];
chat.insertMany(allChat);