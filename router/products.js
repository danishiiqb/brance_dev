import express from 'express';
import {
  deleteProducts,
  getAllProducts,
  postProducts,
  updateProducts,
} from '../controllers/productControllers.js';
const router = express.Router();

router.route('/').get(getAllProducts).post(postProducts);
router.route('/:id').patch(updateProducts).delete(deleteProducts);

export default router;
