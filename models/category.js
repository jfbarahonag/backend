const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema( 
  { 
    name: { 
      type: String, 
    }, 
    slug: {
      type: String,
      unique: true
    },
    created_at: {
      type: Date,
    },
    last_modified: {
      type: Date,
    }
  }, 
  { 
    collection: "categories", 
  } 
); 
 
module.exports = mongoose.model("category", categorySchema);