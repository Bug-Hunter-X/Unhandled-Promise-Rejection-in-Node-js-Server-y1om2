const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    await someAsyncOperation();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

async function someAsyncOperation() {
  await somePromiseThatMightReject();
}

function somePromiseThatMightReject() {
  return new Promise((resolve, reject) => {
    const errorCondition = true; 
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