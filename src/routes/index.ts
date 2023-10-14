import path from 'path'
import { Application } from 'express'
import { createYoga } from 'graphql-yoga'
import { cpus, totalmem } from 'os'
import { memoryUsage, uptime, version } from 'process'

import schema from '../schema'
import { loaders } from '../loaders'

class Routes {
	// default route
	public mountDefault(_express: Application): Application {
		return _express.get('/', (_, res) => {
			const page = path.join(__dirname, '../../public/index.html')
			res.sendFile(page)
		})
	}

	public mountSysInfo(_express: Application): Application {
		return _express.get('/sysinfo', (req, res) => {
			// return html page with system info
			const systemInfo = {
				cpu: cpus(),
				mem: Number(totalmem() / 1024 / 1024).toFixed(2)
			}

			const { rss, heapTotal, heapUsed, external } = memoryUsage()

			res.send(`
				<h1 style="text-decoration: underline;">System Info</h1>
				<p><strong>CPUs</strong>: ${systemInfo.cpu.length}</p>
				<p><strong>Memory</strong>: ${systemInfo.mem} MB</p>
				<p><strong>Node Version</strong>: ${version}</p>
				<p><strong>Uptime</strong>: ${(uptime() / 3600).toFixed(4)} hours</p>

				<h2 style="text-decoration: underline;">Memory Usage</h2>
				<p><strong>RSS</strong>: ${(rss / 1048576).toFixed(2)} MB</p>
				<p><strong>Heap Total</strong>: ${(heapTotal / 1048576).toFixed(2)} MB</p>
				<p><strong>Heap Used</strong>: ${(heapUsed / 1048576).toFixed(2)} MB</p>
				<p><strong>External</strong>: ${(external / 1048576).toFixed(2)} MB</p>
			`)
		})
	}

	public mountYoga(_express: Application): Application {
		const yoga = createYoga({
			graphiql: true,
			schema: schema,
			context: {
				loaders
			}
		})
		return _express.use('/graphql', yoga)
	}
}

export default new Routes()
