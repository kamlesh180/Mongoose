const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat=require("./models/chat.js");

app.set("view",path.join(__dirname,"views"));
app.set("views engine","ejs");

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
let chat1 = new chat({
    from:"kamlesh",
    to :"rahul",
    msg:"hey rahul , can you solve this problem",
    created_at:new Date(),
});
chat1.save()
.then(res =>{
    console.log(res);
})
.catch(err =>{
    console.log(err);
});

app.get("/",(req,res) => {
    res.send("root is working");
});
app.listen(8080,()=> {
    console.log("server is listening on port 8080");
});