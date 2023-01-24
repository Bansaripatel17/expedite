const Product = require('../model/model')
const User = require('../model/user')
const resolvers = {
    products: () =>{
        return Product.find({})
    },
    productByName: (args)=>{
        return Product.findOne({name: args.name})
    },
    userByfirstName: (args)=>{
        // console.log('args',args);
        return User.findOne({mail: args.mail})
    },
    loginUser: (args)=>{
        // console.log('args',args);
        return User.findOne({mail: args.mail})
    },
    updateUser:(args)=>{
        // console.log('updateUser',args.modifyUser._id);
        // console.log('updateUser-id',args.modifyUser);
        let updatedData = new User ({
            _id:args.modifyUser._id,
            firstname:args.modifyUser.firstname,
            lastname:args.modifyUser.lastname,
            mail:args.modifyUser.mail,
            username:args.modifyUser.username,
            password:args.modifyUser.password,
        });
        // console.log('updated-data',updatedData);
       return  User.findByIdAndUpdate(updatedData._id, 
          updatedData
        );
      
        
    },

    addUser:(args)=>{
        // using model to give structure for adding movie  
        let user = new User({
            firstname:args.firstname,
            lastname:args.lastname,
            mail:args.mail,
            username:args.username,
            password:args.password,
            role:args.role,
        })
        // to save inside mongodb server 
        user.save()
        return user
    },
    addMovie:(args)=>{
        // using model to give structure for adding movie  
        let product = new Product({
            _id:args._id,
            name: args.name,
            description: args.description,
            qty: args.qty,
            price:args.price,
            rating: args.rating,
            image: args.image
        })
        // to save inside mongodb server 
        product.save()
        return product
    }
}

module.exports = resolvers