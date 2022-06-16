var Express=require("express")
var app=Express()
app.get('/home',(req,res)=>{
    res.send("Home Page")
})
app.get('/profile',(req,res)=>{
    res.send("Profile Page")

})
app.get('/contact',(req,res)=>{
    res.send("contact page")
})
app.listen(4000,(req,res)=>{
    console.log("server running")
})