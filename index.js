const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors')


const users = [
    { id: 1, name: 'Tayeful', email: 'tayeful@gmail.com' },
    { id: 2, name: 'Sabbir', email: 'sabbir@gmail.com' },
    { id: 3, name: 'Ziaur', email: 'Ziuaur@gmail.com' },
    { id: 4, name: 'Ikram', email: 'ikram@gmail.com' },
    { id: 5, name: 'Hasan', email: 'hasan@gmail.com' },
]


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {

    res.send('My smarty code hello');

})



app.get('/users', (req, res) => {

    // res.header("Access-Control-Allow-Origin", "*");
    console.log(req.query)

    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();


        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))

        res.send(matched)
    }

    else {
        res.send(users)
    }





    // res.send(users)

    // res.send(users)


})

app.get('/users/:id', (req, res) => {

    console.log(req.params)

    const id = parseInt(req.params.id)


    const user = users.find(user => user.id == id)

    // res.header("Access-Control-Allow-Origin", "*");


    res.send(user)

})


app.post('/users', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);

})

app.listen(port, () => {
    console.log('lisen to port', port)
})