import express from 'express'

const app=express()
const PORT=8000

app.get('/',(req,res)=>{
    return res.send('server is running')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})