async function getLikes() {
    try {
      const url = 'https://instagram-scraper-api2.p.rapidapi.com/v1/likes?code_or_id_or_url=CxYQJO8xuC6';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '67b09184d0msh2f5b2c939c4ce6cp171d8djsn162d14bf71ba',
          'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
      };
  
      const response = await fetch(url, options);
      const result = await response.text();
      JSON.parse(result);
      console.log(result.slice(1,1200));
    } catch (error) {
      console.error(error);
    }
  }
  
  getLikes(); // Call the async function to execute the code
  
  const http = require('http');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  });
  
  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  