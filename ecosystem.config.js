module.exports = {
	apps: [
		{
			name: 'fplfriend-api',
			script: 'dist/index.js',
			instances: 8,
			exec_mode: 'cluster',

			env_development: {
				NODE_ENV: 'development',
				PORT: 4500
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
}
