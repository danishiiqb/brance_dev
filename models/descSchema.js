import mongoose from 'mongoose';
const descriptionSchema = mongoose.Schema(
  {
    productDetails: {
      type: 'String',
      required: [true, 'description of product must be provided'],
      trim: true,
      maxlength: [100, 'productdetails name cannot be more than 25 chars'],
    },
    sizefit: {
      type: 'String',
      required: [true, 'size&fit of product must be provided'],
      trim: true,
      maxlength: [50, 'size&fit cannot be more than 50 chars'],
    },
    fabricCare: {
      type: 'String',
      trim: true,
    },
  },
  { timestamps: true }
);
export { descriptionSchema };
