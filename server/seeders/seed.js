const db = require('../config/connection');
const { Username } = require('../models');
const usernameSeeds = require('./usernameSeeds.json');

db.once('open', async () => {
  await Username.deleteMany({});
  await Username.create(usernameSeeds);

  console.log('all done!');
  process.exit(0);
});
