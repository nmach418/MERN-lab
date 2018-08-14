const GreetingCard = require('./db/models')

module.exports ={
index: (req,res) => {

   GreetingCard.find()
   .then((cards)=> console.log(cards))
},
new: (req, res) => {
// testing route
console.log("new")

},

create: (req, res) => {
// testing route
console.log("new")
    },

update: (req, res) => {
// testing route
console.log("update")
},

delete: (req, res) => {
    GreetingCard.findOneAndRemove({ _id: req.params.id }).then(greetingcards => {
        res.redirect('/')
})
}
}
