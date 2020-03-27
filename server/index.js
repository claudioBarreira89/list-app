const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/data", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { page, category, search } = req.query;
    const number = page > 0 ? +page : 1;

    let filtered = [...data];

    if (search) {
        filtered = filtered.filter(el =>
            el.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (category) {
        filtered = filtered.filter(el => el.categories.includes(category));
    }

    const itemsPerPage = 3;
    const paged = [];

    if (filtered.length) {
        filtered = filtered.sort((a, b) => {
            const aValue = a.subscriptions.reduce(
                (acc, v) => (acc += v.price),
                0
            );
            const bValue = b.subscriptions.reduce(
                (acc, v) => (acc += v.price),
                0
            );

            return aValue > bValue ? 1 : bValue > aValue ? -1 : 0;
        });

        for (let i = 0; i < filtered.length; i += itemsPerPage) {
            const block = filtered.slice(i, i + itemsPerPage);

            paged.push(block);
        }
    }

    res.send(
        JSON.stringify({
            data: paged.length ? paged[number - 1] : null,
            numberOfPages: paged.length,
            currentPage: number
        })
    );
});

app.listen(3001, () =>
    console.log("Express server is running on localhost:3001")
);
