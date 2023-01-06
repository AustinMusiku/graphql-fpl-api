import express, { Application } from 'express'

import Locals from './Locals'
import Routes from '../routes'
import Bootstrap from '../middlewares/Kernel'

class Express {
	public express: Application

	constructor() {
		this.express = express()

		this.mountDotEnv()
		this.mountMiddlewares()
		this.mountRoutes()
	}

	private mountDotEnv(): void {
		this.express = Locals.init(this.express)
	}

	private mountMiddlewares(): void {
		this.express = Bootstrap.init(this.express)
	}

	private mountRoutes(): void {
		this.express = Routes.mountYoga(this.express)
		this.express = Routes.mountDefault(this.express)
	}

	public init(): any {
		const port: number = this.express.locals.app.port

		// Start the server
		this.express.listen(port, () => {
			return console.log(
				'\x1b[33m%s\x1b[0m',
				`Server :: Running @ 'http://localhost:${port}'`
			)
		})
	}
}

export default new Express()
