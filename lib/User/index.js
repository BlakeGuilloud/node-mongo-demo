import express from 'express';

import { getUser } from './controller';

const router = express.Router();

router.get('/', getUser);

module.exports = router;