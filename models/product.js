const mongoose = require("mongoose");

const productSchema = new mongoose.Schema( 
  { 
    name: { 
      type: String, 
    }, 
    slug: {
      type: String,
      unique: true
    },
    image: { 
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
      type: String, 
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