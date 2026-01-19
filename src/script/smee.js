import SmeeClient from 'smee-client';

const smee = new SmeeClient({
  source: 'https://smee.io/1qtvGPqeSc44mgXk', 
  target: 'http://localhost:3000/api/webhook',
  logger: console,
});

smee.start();
console.log('✅ Smee client started and forwarding events...');
