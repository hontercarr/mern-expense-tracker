const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const transactions = require("./routes/transactions");

// Config and DB Connection
dotenv.config({ path: "./config/config.env" });
connectDB();

// Express and Express Body Parsing
const app = express();
app.use(express.json());

// Routes
app.use("/api/v1/transactions", transactions);

// Use build folder when in production
const env = "production";

if (env === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build,", "index.html"))
    );
}

// Server
const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
