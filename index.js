const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World ! pagol')
 
})


const users = [
    {
        id:1 , name: 'jony', email:'md.jony.soft@gmail.com', phone:'01627392810'    
    },
    {
        id:1 , name: 'rony', email:'md.jony.soft@gmail.com', phone:'01627392810'    
    },
    {
        id:1 , name: 'mony', email:'md.jony.soft@gmail.com', phone:'01627392810'    
    },
    {
        id:1 , name: 'abcd', email:'md.jony.soft@gmail.com', phone:'01627392810'    
    }
]
app.get('/users',(req, res) =>{
    res.send(users)
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id= req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})