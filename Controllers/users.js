import { v4 as uuidv4 } from 'uuid';

let users = [

]

export const GetUsers =(req, res)=>{

    res.send(users);
}

export const createUser = (req, res)=>{

    //console.log(req.body); //gatting data from the body of the brwser
    const user = req.body;

    //const userId = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    //const userWithId ={ ... user, id:uuidv4() }
   
    users.push({ ... user, id:uuidv4() });
    res.send(`Users with the name ${user.FirstName} added to Database !!`);
};

export const GetUser = (req ,res) => {

    const { id } = req.params;

    //find the user from the DB that have the same id
   
    const foundUserById = users.find((user) => user.id == id );
    res.send(foundUserById);
}

export const DeleteUser = (req , res) => {

    const { id } =req.params;

    users =users.filter((user)=> user.id !== id);
    res.send(`User with id ${id} deleted from Database.`);
}

export const UpdateUser = (req , res) => {

    const { id } =req.params;
    const { FirstName,LastName,Age } =req.params;

    const user = users.find((user) => user.id == id);

    if(FirstName)user.FirstName = FirstName;
    if(LastName) user.LastName = LastName;
    if(Age) user.Age = Age;
    

    res.send(`User with id ${id} has been Updated .`);
}