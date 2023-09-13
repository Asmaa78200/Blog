const cloudinary = require('cloudinary').v2;       

cloudinary.config({ 
  cloud_name: 'dgrq6xu4c', 
  api_key: '548867843892799', 
  api_secret: '3M4TJqgpPz5lwoXZsumAbvh7Pzw' 
});

module.exports = cloudinary;