const express = require('express')
const path = require('path')
const app = express()
const pool = require('./db')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/cliente',async (req, res) =>
{
    const {rows} = await pool.query('SELECT * FROM cliente')
    const projeto = [{p1 :'p11',p2 : 'p22'},{p3 : 'p33'}]
    res.json({linhas : rows,pro : projeto});
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

