import nodeCache from 'node-cache'

class Cache {
	private static instance: Cache

	constructor() {
		if (Cache.instance) {
			throw new Error('Cache already exists')
		}
	}

	public static getCache(): Cache {
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

	get(key: string) {
		return Cache.instance.get(key)
	}

	set(key: string, value: string) {
		Cache.instance.set(key, value)
	}
}

export default Cache.getCache()
