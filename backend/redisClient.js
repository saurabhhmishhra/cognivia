const { createClient } = require('redis');

const client = createClient({
  username: 'default',
  password: 'ilVEaodiARRdJXIAJWBlhSGQdcUzuKVJ',
  socket: {
    host: 'redis-15351.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: 15351
  }
});

client.on('error', err => console.error('❌ Redis Client Error:', err));

client.connect()
  .then(() => console.log('✅ Redis Connected'))
  .catch(err => console.error('Redis Connect Failed:', err));

module.exports = client;
