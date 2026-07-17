const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ogheneroprince5_db_user:ogheneroprince5_db_user2026@second.njwvyvk.mongodb.net/')
.then(()=>{
    console.log('mongoose connected successfully')
})
.catch((err)=>{
        console.log(err)
})

const userShema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive: Boolean,
    tags : [String],
    created : {type : Date, default : Date.now}
});

const user = mongoose.model('User', userShema);

async function creation(){
    try{
        const newShema = await user.create({
            name : "destiny oghenero",
            email : "destiny@gmail.com",
            age : 32,
            isActive: true,
            tags : ["developer", "website"]
        });

        console.log(newShema);

        const alluser = await user.findOne({ age : 32 });
        console.log(alluser);

    }catch (err) {

        console.log(err);

    } finally {
       await mongoose.connection.close();
    }
}

creation();