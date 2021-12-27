import mongoose from 'mongoose';
import { descriptionSchema } from './descSchema';
import { reviewSchema } from './reviewSchema';

let productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name of product must be provided'],
      trim: true,
      maxlength: [25, 'name cannot be more than 25 chars'],
    },
    productDescription: descriptionSchema,
    prize: {
      type: Number,
      required: true,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    brand: {
      type: 'String',
      required: true,
      default: 'Brance Dev',
    },
    style: {
      type: String,
    },
    material: {
      type: String,
      required: true,
    },
    pattern: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      validate: [
        {
          validator: function (val) {
            return val.length <= 4;
          },
          msg: '{PATH} exceeds the limit of 4',
        },
      ],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    colour: [String],
    size: [String],
    rating: { type: Number, required: true },
    inStock: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'Jacket & Coats',
        'Hoodies & SweatShirts',
        'Tshirts & Polos',
        'Joggers',
        'Shirts',
        'Jeans',
        'LoungeWear',
        'Pants & Chinos',
        'Socks',
        'Sets & OutFits',
        'Jumpers & KnitWear',
      ],
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model('product', productSchema);
