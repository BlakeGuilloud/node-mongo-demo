import express from 'express';

import { getUsers, postUser } from './controller';

const router = express.Router();

router.get('/', getUsers);
router.post('/', postUser);

module.exports = router;
