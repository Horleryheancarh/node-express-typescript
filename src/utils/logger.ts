import pino from 'pino';
import pretty from 'pino-pretty';
import dayjs from 'dayjs';

const stream = pretty({
	colorize: true
});

const log = pino({
	base: {
		pid: false
	}, 
	timestamp: () => `,"time":"${dayjs().format()}"`,
}, stream);

export default log