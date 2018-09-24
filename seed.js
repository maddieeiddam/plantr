const db = require("./models")
const { vegetable } = db.models;

const vegetablesToAdd = [
    {name: 'carrot', color: 'orange'},
    {name: 'kale', color: 'green'},
    {name: 'tomato', color: 'red'},
]

db.sync({ force: true })
    .then(() => {
        return Promise.all(vegetablesToAdd.map((veg) => {
            vegetable.create(veg);
        }))
    })
    .then(() => {
        db.close();
    })

    .catch (err => {
        console.log(err);
    })
