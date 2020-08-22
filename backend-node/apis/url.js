import express from 'express';
import shortid from 'shortid';
import { validationResult } from 'express-validator';

const router = express.Router();

import Model from '../models/url';
import validators from '../validators/url';
import errorHandler from '../helpers/error';

router.get('/', async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  try {
    const skipped = (page - 1) * limit;
    const count = await Model.countDocuments();
    const results = await Model.find({})
      .skip(skipped)
      .limit(limit)
      .sort({ createdAt: -1 });
    return res.json({
      count,
      page,
      pages: Math.ceil(count / limit),
      skipped,
      limit,
      results
    });
  } catch (error) {
    return errorHandler(res, error);
  }
});

router.get('/:short', async (req, res) => {
  const { short } = req.params;
  try {
    const url = await Model.findOne({ short });
    try {
      await Model.findOneAndUpdate(
        { short },
        { accessCount: url.accessCount + 1 }
      );
    } catch (e) {
      // ignore
    }
    return res.status(301).redirect(url.long);
  } catch (e) {
    return res.status(404).json({ msg: 'Not found' });
  }
});

router.post('/', validators, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      msg: errors.array()[0].msg,
      errors: errors.array()
    });
  }
  const { url: long } = req.body;
  try {
    const short = shortid.generate();
    const url = new Model({
      long,
      short
    });
    await url.save();
    return res.json(url);
  } catch (error) {
    return errorHandler(res, error);
  }
});

export default router;
