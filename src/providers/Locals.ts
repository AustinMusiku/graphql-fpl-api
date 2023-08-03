import { Application } from 'express'

class Locals {
	public static config() {
		const port = process.env.PORT || 4500

		return { port }
	}

	public static init(_express: Application): Application {
		_express.locals.app = this.config()
		return _express
	}
}

export default Locals
