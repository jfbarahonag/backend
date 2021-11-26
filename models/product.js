const mongoose = require("mongoose")
const { Schema } = mongoose

const productSchema = new Schema( 
  { 
    name: { 
      type: String, 
    }, 
    slug: {
      type: String,
      unique: true
    },
    images: { 
      type: Array, 
    }, 
    price: { 
      type: Number, 
    }, 
    description: { 
      type: String, 
    }, 
    features: { 
      type: Array, 
    }, 
    category_id: { 
      type: Schema.ObjectId,
      ref: 'category'
    }, 
    status: { 
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    last_modified: {
      type: Date,
      default: Date.now,
    }
  }, 
  { 
    collection: "products", 
  } 
); 
 
module.exports = mongoose.model("product", productSchema);