import express from 'express';
import config from 'config';

import { connect, logger } from './utils';

const port = config.get<number>('port');
const host = config.get<string>('host');

const app = express();

app.listen(port, async () => {
	logger.info(`App is running on ${host}:${port}`);

	await connect();
});