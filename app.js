import express from "express";

import path from "path";
const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage.html"));
});

app.listen(process.env.PORT || 8080, (error)=> {
    console.log(error);
    console.log("Server is running on port", 8080)
})

const dateCurrent = new Date();
const dateUS = new Date();

const localTime = dateUS.getTime();
const localOffset = dateUS.getTimezoneOffset() * 60000;

const utc = localTime + localOffset;
const offset = -4;
const newYorkUTC = utc + (3600000 * offset);
const dateNewYork = new Date(newYorkUTC)



app.get("/gettime", (req, res) =>{
        res.send({
        timeCurrent: dateCurrent.toLocaleTimeString(),
        dateCurrent: dateCurrent.toLocaleDateString(),
        timeNewYork: dateNewYork.toLocaleTimeString(),
        dateNewYork: dateNewYork.toLocaleDateString()
        })
    
    })