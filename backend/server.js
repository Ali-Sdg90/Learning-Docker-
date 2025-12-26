const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
    return res.json({ msg: "Hello from backend" });
});

app.listen(4000, () => console.log("Backend on http://0.0.0.0:4000"));
