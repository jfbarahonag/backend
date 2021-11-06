const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema( 
  { 
    name: { 
      type: String, 
    }, 
    path: { 
      type: String, 
    },
    created_at: {
      type: Date,
    },
    last_modified: {
      type: Date,
    }
  }, 
  { 
    collection: "files", 
  } 
); 
 
module.exports = mongoose.model("file", fileSchema);