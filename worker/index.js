const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisPort,
    port: keys.redisPort,
    retry_strategy: () => 1000
});
const sub = redisClient.duplicate();

sub.on('message', function (channel, message) {
    const index = parseInt(message);
    const calculatedFibo = FibbonaciModule.calculate(index);

    redisClient.hset('values', message, calculatedFibo);
});
sub.subscribe('insert');