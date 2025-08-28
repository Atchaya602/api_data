// fetchData.js
const fs = require('fs'); // to save file
const https = require('https'); // to fetch data

// Sample public API
const url = 'https://jsonplaceholder.typicode.com/users';

https.get(url, (res) => {
  let data = '';

  // Collect data chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Once all data received
  res.on('end', () => {
    const jsonData = JSON.parse(data);
    fs.writeFileSync('users.json', JSON.stringify(jsonData, null, 2));
    console.log("✅ Data saved to users.json");
  });

}).on('error', (err) => {
  console.log("Error: " + err.message);
});
