const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req, res) => {
    res.send("Hello World");
})


app.post('/add', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types',
        });
    }

    const sum = num1 + num2;
    if (num1 < -1000000 || num2 < -1000000 || sum < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow',
        });
    } else if (num1 > 1000000 || num2 > 1000000 || sum > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow',
        });
    }

    return Promise.resolve()
        .then(() => {
            return res.json({
                status: 'success',
                message: 'The sum of given two numbers',
                sum: sum,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: 'error',
                message: 'Internal server error',
            });
        });
});

app.post('/sub', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types',
        });
    }

    const difference = num1 - num2;
    if (num1 < -1000000 || num2 < -1000000 || difference < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow',
        });
    } else if (num1 > 1000000 || num2 > 1000000 || difference > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow',
        });
    }

    return Promise.resolve()
        .then(() => {
            return res.json({
                status: 'success',
                message: 'The difference of given two numbers',
                difference: difference,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: 'error',
                message: 'Internal server error',
            });
        });
});

app.post('/multiply', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types',
        });
    }

    const result = num1 * num2;
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow',
        });
    } else if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow',
        });
    }

    return Promise.resolve()
        .then(() => {
            return res.json({
                status: 'success',
                message: 'The product of given numbers',
                result: result,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: 'error',
                message: 'Internal server error',
            });
        });
});

app.post('/divide', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types',
        });
    }

    if (num2 === 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Cannot divide by zero',
        });
    }

    const result = num1 / num2;
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow',
        });
    } else if (num1 > 1000000 || num2 > 1000000 || result > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow',
        });
    }

    return Promise.resolve()
        .then(() => {
            return res.json({
                status: 'success',
                message: 'The division of given numbers',
                result: result,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                status: 'error',
                message: 'Internal server error',
            });
        });
});
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;