import nodeCache from 'node-cache'

class Cache {
	private static instance: nodeCache

	constructor() {
		if (Cache.instance) {
			throw new Error('Cache already exists')
		}
	}

	public static getInstance(): nodeCache {
		if (Cache.instance) {
			return Cache.instance
		} else {
			Cache.instance = new nodeCache({
				stdTTL: parseInt(process.env.TTL || '172800'),
				checkperiod: parseInt(process.env.CHECKPERIOD || '600')
			})
			return Cache.instance
		}
	}
}

export default Cache
