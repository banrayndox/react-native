import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 8080



app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/',(req, res)=>{
console.log(req,res)
})

app.listen(PORT, ()=>{
    console.log(`Server Started On Port : ${PORT}`)
})