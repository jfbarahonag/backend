const user = 'user123';
const password = '12345';
const ddbb = 'proyecto-ciclo-3';
const url = `mongodb+srv://${user}:${password}@cluster0.tifmp.mongodb.net/${ddbb}?retryWrites=true&w=majority`;

module.exports = { 
  url
  // db: "mongodb://localhost:27017/products", 
}; 