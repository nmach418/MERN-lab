const GreetingCard = require('./db/models')

module.exports ={
index: (req,res) => {

    //we want to populate the homepage with our backend data.
    //test to make sure this route works:
   GreetingCard.find()
   .then((test)=> console.log(test))
},
new: (req, res) => {
// testing route
console.log("new")

},

create: (req, res) => {
    // testing route
    console.log("create")
},

update: (req, res) => {
// testing route
console.log("update")
},

delete: (req, res) => {
    // testing route
    console.log("update")

}
}