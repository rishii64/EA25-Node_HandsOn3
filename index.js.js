const express = require("express")
const app = express()


const middleware1 = (req, res, next) => {
    console.log("first middleware");
    next()
}
const middleware2 = (req, res, next) => {
    console.log("second middleware");
    next()
}
app.use(middleware1)
app.get("/api/middleware1/home",middleware2, (req, res) => {
    console.log("api is running");
    res.send("Home Page")
})
app.get("/api/middleware1/about",middleware2, (req, res) => {
    console.log("api is running");
    res.send("About Page")
})
app.get("/api/middleware1/contact", (req, res) => {
    console.log("api is running");
    res.send("Contact Page")
})
app.get("/api/middleware1/details", (req, res) => {
    console.log("api is running");
    res.send("Details Page")
})
app.listen(3001,()=>{
    console.log("server started");
})