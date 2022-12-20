import * as path from 'path';
import * as dotenv from 'dotenv';

import Express from './Express';

class App {
	public loadConfiguration (): void {
		dotenv.config({ path: path.join(__dirname, '../../.env') });
	}

	public loadServer (): void {
		Express.init();
	}
}

export default new App;
