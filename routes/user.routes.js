import express from 'express'
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

import {getUsers,getUserById,createUser,updateUser,patchUser,deleteUser} from '../controller/user.controller.js'

const router = express.Router();

router.get('/',getUsers);
  
router.get('/:id',getUserById);

router.post('/',createUser);

router.put('/:id',updateUser);

router.patch('/:id',patchUser);

router.delete('/:id',deleteUser);

export default router;