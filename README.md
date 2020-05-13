# Horizontal partitioning in MongoDB

This repository can be used as part of the ["Horizontal partitioning in MongoDB"](https://www.learncloudnative.com/blog/2020-05-12-creating-horizontal-partitions-or-shards-in-mongodb/) article.

## What's in this repo?

- `docker-compose.yml` = 3 MongoDB shards, a configuration server and a router
- `books.json` = sample data
- `init-config.js` = config file for the configuration server
- `init-router.js` = config file for the router
- `init-shard1.js` = config file for shard1 
- `init-shard2.js` = config file for shard2
- `init-shard3.js` = config file for shard3

## How to get started? 

Run `docker-compose up -d`, then configure all services. See the ["Horizontal partitioning in MongoDB"](https://www.learncloudnative.com/blog/2020-05-12-creating-horizontal-partitions-or-shards-in-mongodb/) article.
