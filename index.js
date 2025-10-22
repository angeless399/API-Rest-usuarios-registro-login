import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.static('./public'))

import usersRouter from './src/routes/users.routes.js'
app.use('/users', usersRouter)



// app.get('/', (req, res) => {
//     res.send('<h1>Bienvenidos Backend Registro y login de usuarios</h1>')
// })

app.use((req, res) => {
    res.status(404).send('La ruta solicitada no existe')
})

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))