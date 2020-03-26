const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/data", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { page } = req.query;
    const number = page > 0 ? +page : 1;

    const itemsPerPage = 3;
    const paged = [];
    for (let i = 0; i < data.length; i += itemsPerPage) {
        const block = data.slice(i, i + itemsPerPage);

        paged.push(block);
    }

    res.send(
        JSON.stringify({
            data: paged[number - 1],
            numberOfPages: paged.length,
            currentPage: number
        })
    );
});

app.listen(3001, () =>
    console.log("Express server is running on localhost:3001")
);
