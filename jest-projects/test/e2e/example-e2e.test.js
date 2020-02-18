const axios = require('axios');

describe('sample API tests', () => {
  it('should retrieve status from google.com when our API server is up', async () => {
    const result = await axios.get('https://google.com');

    expect(result.status).toBe(200);
  });
});
