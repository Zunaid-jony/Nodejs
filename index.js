const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())
// post er jonn midel wore 
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World ! pagol')
 
})




const users = [
    {
        id:1 , name: 'jony', email:'md.jony.soft@gmail.com', phone:'01627392810'    
    },
    {
        id:2 , name: 'rony', email:'md.jony.soft@gmail.com', phone:'01627392810'    
    },
    {
        id:3 , name: 'mony', email:'md.jony.soft@gmail.com', phone:'01627392810'    
    },
    {
        id:4 , name: 'abcd', email:'md.jony.soft@gmail.com', phone:'01627392810'    
    }
]
app.get('/users',(req, res) =>{
    // filter by query parameter
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users)

    }
    
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id= req.params.id;
    const user = users[id];
    res.send(user)
})

// post data   fron-end to back-end post  
app.post('/user', (req, res) =>{
    console.log('request',req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)

})

app.get('/fruits', (req,res) =>{
    res.send(['mango', 'apple', 'oranges'])
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})