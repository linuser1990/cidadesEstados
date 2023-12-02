const express = require('express')
const path = require('path')
const app = express()
const pool = require('./db')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/cliente',async (req, res) =>
{
    const {rows} = await pool.query('SELECT * FROM cliente')
    console.log(rows)
    res.json({ results: rows });
})

app.get('/cidadesEstadosMapa', (req, res) =>
{
    res.render('tabelaCidadesEstadosMaps')
})

app.get('/cidadesEstados', (req, res) =>
{
    res.render('dynamicTableCidadesEstados')
})

app.get('/', (req, res) =>
{
    res.render('dynamicTable')
})

app.listen(4000)

