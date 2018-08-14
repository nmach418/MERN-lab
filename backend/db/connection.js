const mongoose = require('mongoose')


if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
} else {
    mongoose.connect("mongodb://localhost/greeting-card-data");
}

mongoose.Promise = Promise

module.exports = mongoose