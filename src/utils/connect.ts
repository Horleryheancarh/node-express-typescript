import mongoose from "mongoose";
import config from 'config';

import { logger } from ".";

export default async function connect() {
	const dbUri = config.get<string>('dbUri');

	try {
		await mongoose.connect(dbUri);
		logger.info("Connected to Database");
	} catch (error) {
		logger.error("Could not connect to Database");
		process.exit(1);
	}
}