var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var boardSchema = mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Board', boardSchema);
