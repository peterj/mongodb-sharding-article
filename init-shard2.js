rs.initiate({
  _id: 'shard2',
  version: 1,
  members: [{ _id: 0, host: 'shard2:27019' }],
});