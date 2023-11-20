import Express from "express";

import { createUser,GetUsers,GetUser,DeleteUser,UpdateUser } from "../Controllers/users.js";

const router =Express.Router();

//all routes in here are starting with /users 
router.get('/', GetUsers);

router.post('/',createUser);

//:any thing after user // make is to the userid only req.params{id:2}
router.get('/:id', GetUser);

router.delete('/:id', DeleteUser);

router.patch('/:id', UpdateUser);

export default router;