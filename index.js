const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => { 

    fetch("https://v1.formula.api-sports.io/{endpoint}", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.formula.api-sports.io",
        "x-rapidapi-key": "b92fa83c3b38958c4153f177cb49c6e7"
    }
    })
    .then(response =>  console.log(response) )

    res.render("./index.html")
})

app.get('/index.html', (req, res) => { 

    fetch("https://v1.formula.api-sports.io/{endpoint}", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.formula.api-sports.io",
        "x-rapidapi-key": "b92fa83c3b38958c4153f177cb49c6e7"
    }
    })
    .then(response =>  console.log(response) )

    res.render("./index.html")
})

app.get('/jugadores.html', (req, res) => { 

    fetch("https://api-formula-1.p.rapidapi.com/teams/?name=Lewis Hamilton", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
            "x-rapidapi-key": "b92fa83c3b38958c4153f177cb49c6e7"
        }
    })
    .then(response => {
        console.log(response.name);
    })
    .catch(err => {
        console.log(err);
    });

    res.render("./jugadores.html")
})
app.get('/ranking.html', (req, res) => { 

    fetch("https://v1.formula-1.api-sports.io/{endpoint}", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.formula.api-sports.io",
        "x-rapidapi-key": "b92fa83c3b38958c4153f177cb49c6e7"
    }
    })
    .then(response =>  console.log(response) )

    res.render("./ranking.html")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
















