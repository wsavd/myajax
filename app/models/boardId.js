var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var BoardIdSchema= mongoose.Schema({
    boardId: String
},
{ versionKey: false });//не выводить v__);

module.exports = mongoose.model('BoardId', BoardIdSchema);