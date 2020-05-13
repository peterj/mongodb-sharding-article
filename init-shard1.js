rs.initiate({
  _id: 'shard1',
  version: 1,
  members: [{ _id: 0, host: 'shard1:27018' }],
});