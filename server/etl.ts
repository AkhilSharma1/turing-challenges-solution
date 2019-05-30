const axios = require('axios');

(async () => {
  try {
    const {data} = await axios.get('http://localhost:5000/api/products/12');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
