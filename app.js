import express from "express";
import userRouter from "./routes/user.routes.js";
import chalk from "chalk";

const app = express();

// BODY PARSER (JSON)
app.use(express.json());

// BASE ROUTE
app.get("/", (req, res) => {
    res.send("User Management API is running");
});

console.log(chalk.green("Success message"));
console.log(chalk.blue("Latest Information message"));

// USER ROUTES
app.use("/api/users", userRouter);

export default app;