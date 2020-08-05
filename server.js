const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const router = require("./routes");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"
    ));
};

app.use(router);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));

});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books");

app.listen(PORT, () => {
    console.log(`Connected ${PORT}!`);
});