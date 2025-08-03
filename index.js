const List = require('./Models/List')
const mongoose = require('mongoose')
const express = require("express")
const app = express()
const cors = require('cors')
const port = 5500
app.use(express.json())
app.use(cors())


app.get("/:diaSemana", async (req, res) => {
    const { diaSemana } = req.params
    const list = await List.findOne({ dia: { $eq: diaSemana } })
    res.json(list)
})

app.get("/", async (req, res) => {
    const list = await List.find()
    const dias = list?.map(item=>item.dia)
    res.json({diaSemana: dias})
})

app.post("/:day", async (req, res) => {
    const { day } = req.params

    const NewDay = new List({

        dia: day,
        guarnicao: ['arroz', 'arroz integral', 'feijão'],
        proteina: ['carne', 'peixe', 'frango'],
        salada: ['tomate', 'Alface'],
        bebida: ['suco', 'agua']

    })

    NewDay.save()
    return res.json(NewDay)

})


app.listen(port, async () => {
    LinkConect = "mongodb+srv://pedroleonardo2001:LRqDb2hdeyQ4jpGt@duo.9k1o8hq.mongodb.net/?retryWrites=true&w=majority&appName=Duo"
    mongoose.connect(LinkConect);

    console.log(`Tá funiçando no link  http://localhost:${port}`)

})          