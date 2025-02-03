const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    //This is where the error handling needs to be improved
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that may throw an error
  //This is the part of the code that will throw an error
  await somePromiseThatMightReject();
}

function somePromiseThatMightReject() {
  return new Promise((resolve, reject) => {
    //Simulate a condition where an error might occur, such as database connection failure or file system errors 
    const errorCondition = true; //Change this to false to avoid error
    if (errorCondition) {
      reject(new Error('Failed to complete operation'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});