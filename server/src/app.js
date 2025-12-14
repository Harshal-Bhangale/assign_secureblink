const express = require("express");
const reconRoutes = require("./routes/recon.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({ status: "API is running" });
});

// Routes
app.use("/", reconRoutes);

// Error middleware (must be last)
app.use(errorHandler);

module.exports = app;
