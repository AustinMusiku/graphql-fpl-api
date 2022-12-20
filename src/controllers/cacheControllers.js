const nodeCache = require('node-cache');

const myCache = new nodeCache({
    stdTTL: 172800,
    checkperiod: 600
})
myCache.on('error', err => {
    throw err;
})

module.exports = { myCache };