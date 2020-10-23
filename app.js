const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Cache-Control", "no-cache, no-store, must-revalidate"); 
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

const distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.get('*', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname, 'dist', 'ang-app', 'de', 'index.html'));
}, (err) => {
    console.log(err)
})


app.listen(port, () => {
    console.log('Server listening...');
})

