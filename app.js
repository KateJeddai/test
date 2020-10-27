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
app.use(express.static(distDir))
app.use('/de',  express.static(path.resolve(__dirname, 'dist', 'ang-app', 'de')));
app.use('/en',  express.static(path.resolve(__dirname, 'dist', 'ang-app', 'en')));


app.get('/api/de', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname, 'dist', 'ang-app', 'de', 'index.html'));
}, (err) => {
    console.log(err)
})

app.get('/api/en', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname, 'dist', 'ang-app', 'en', 'index.html'));
}, (err) => {
    console.log(err)
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'ang-app', 'en', 'index.html'));
})

//app.get('*.*', express.static(distDir));
// if(process.env.NODE_ENV === 'production') {
//     const distDir = __dirname + "/dist/";
//     app.use(express.static(distDir));
//     app.use('/de',  express.static(path.resolve(__dirname, 'dist', 'ang-app', 'de')));
//     app.use('/en',  express.static(path.resolve(__dirname, 'dist', 'ang-app', 'en')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'dist', 'ang-app', 'en', 'index.html'));
//     })
// }

app.listen(port, () => {
    console.log('Server listening...');
})
