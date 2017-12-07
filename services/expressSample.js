import express from "express";
import {gradeCalculator, averageCalculator} from "./gradeCheck/grades";

let app = express();

app.use((req, res, next) => {
    console.log("middleware for all requests");
    next();
})

app.use("/redux-sample", (req, res, next) => {
    console.log("middleware for redux-sample requests");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => {
    console.log("inside GET");
    res.send("Congratulation for express installation");
});

app.get("/redux-sample", (req, res) => {
    console.log("inside GET /redux-sample");
    res.send("Congratulation for express installation");
});

app.get("/grades", (req, res) => {
    console.log("check grades");
    let marks = req.query.grades.split(",");
    console.log("marks submitted" + marks);
    const avg = averageCalculator(marks);
    const grade = gradeCalculator(avg);
    res.send(`The average is ${avg} and grade is ${grade}`);
});

app.listen(1900);
console.log("--------server started--------");
