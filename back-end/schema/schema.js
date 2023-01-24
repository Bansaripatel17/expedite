const {buildSchema} = require('graphql')



const movieSchema = buildSchema(`
    type Query {
        products: [Product],
        users:[User],
        productByName(name: String!) : Product
    }
    input modifyUser {
        _id:ID,
        firstname:String,
        lastname:String,
        mail:String,
        username:String,
        password:String,
    }
    type Mutation {
        addProduct(name: String!,description: String!,qty: String!,price: String!,rating:String!,image:String) : Product
        addUser(firstname: String!,lastname: String!,mail: String!,username: String!,password:String!,role:String!) : User
        userByfirstName(mail:String!):User
        loginUser(mail:String!):User
        updateUser(modifyUser:modifyUser):Boolean

        
    }
    type Product {
        name:String,
        description:String,
        qty:String,
        price:String,
        rating:String,
        image:String
    }
    type User{
        _id:ID,
        firstname:String,
        lastname:String,
        mail:String,
        username:String,
        password:String,
        role:String,
    }
    
`)

module.exports = movieSchema;