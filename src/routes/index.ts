import { Application } from 'express';
import { createYoga } from 'graphql-yoga';
import dataLoader from 'dataloader';

import Schema from '../schema';
const fetchMethods = require('../controllers/fetchControllers');

let getPlayerEventsByIds = async (keys: readonly number[]) => {
	return keys.map(fetchMethods.getPlayerEventsById)
}

let getPlayerDataByIds = async (keys: readonly number[]) => {
	return keys.map(fetchMethods.getPlayerDataById)
}

const loaders = {
	playerEvent: new dataLoader(getPlayerEventsByIds),
	playerData: new dataLoader(getPlayerDataByIds)
}

const yoga = createYoga({ 
	schema: Schema,
	context: {
		loaders: loaders
	}
})


class Routes {
	public mountGraphQL(_express: Application): Application {
		return _express.use('/graphql', yoga);
	}
}

export default new Routes;