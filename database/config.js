const mongoose = require('mongoose');

const dbConnetion = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN,{
 //           useNewUrlParser: true,
 //           useUnifiedTopology: true
        });
        console.log('DB Online');
    } catch (error) {
       console.log('aquie el error ' + error);
       throw new Error('Error a la hora de inicializar BD');    
    }

}

module.exports = {
    dbConnetion
}