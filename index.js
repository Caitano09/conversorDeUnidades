const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT /*Porta do servidor online*/ || 3000 

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(port, err => {
    if (err) {
        console.log('Não foi possível iniciar')
    }
    else {
        console.log('Conversor de Unidades está online')
    }
})
