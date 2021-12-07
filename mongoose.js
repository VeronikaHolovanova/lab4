var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin123@cluster0.2pxec.mongodb.net/Lab4',  { useNewUrlParser: true } );
mongoose.set('useFindAndModify', false);
console.log("mongodb connect...")
module.exports=mongoose;