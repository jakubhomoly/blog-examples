const axios = require('axios');

const statusCheck = async () => {
  try {
    const res = await axios.get('http://localhost:8080/status');
    return res.status === 200;
  } catch (err) {
    return false;
  }
};

module.exports = async () => {
  console.log(`\n[jest] waiting for server's health check...`);

  let isUp = false;
  while (isUp === false) {
    await new Promise((r) => setTimeout(r, 250));

    isUp = await statusCheck();
  }

  console.log(`[jest] server is up...`);
};
