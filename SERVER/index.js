const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/databaseConnect");
const app = express();
const PORT = process.env.PORT || 5000;
const ToDoRoutes = require("./routes/ToDoRoute")


dotenv.config();
database.connect();
app.use(express.json());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running ...",
    });
});

app.use(ToDoRoutes);