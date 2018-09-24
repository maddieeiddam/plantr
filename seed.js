const db = require("./models")
const {Vegetable} = db.models.vegetable
db.sync({force: true})
.then(() => {
    console.log("Sync!");
    db.models.Vegetable.bulkCreate([{
        name: "carrots", color: "orange", plated_on: "2018-01-01"},
        {
        name: "kale", color: "green", plated_on: "2018-01-02"    
        }   
    ])

    // db.close()
})

.catch(err => {
    console.log(err);
    //db.close()
 })

 .finally(()=>{
     db.close();
 })
