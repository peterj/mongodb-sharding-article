rs.initiate({
  _id: 'shard3',
  version: 1,
  members: [{ _id: 0, host: 'shard3:27020' }],
});