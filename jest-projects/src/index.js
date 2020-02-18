const fastify = require('fastify')({ logger: true });

fastify.get('/status', async () => 'okay');

setupServer = async () => {
  fastify.listen(8080);
};

setupServer();

