const express = require('express');
const cors = require('cors');

const app = express();

//top level middleware
app.use(express.json());
app.use(cors());

const inventory = ['water', 'cheese wheel', 'oats', 'pasta', 'booster', 'turbo'];

app.get('/api/inventory', (req, res) => {
    const {item} = req.query
    if (item){
        const filteredItems = inventory.filter(invItem => invItem.toLocaleLowerCase().includes(item.toLowerCase()))

        res.status(200).send(filteredItems)
    } else {
         res.status(200).send(inventory)
    }
});

app.get('/api/inventory:index', (req, res) => {
    console.log(req.params)
    res.status(200).send(inventory[+req.params.index])
})


const port = 5050;
app.listen(port, () => console.log(`Turbo time on port ${port}`));