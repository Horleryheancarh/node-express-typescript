import mongoose from "mongoose";
import config from 'config';

export default async function connect() {
	const dbUri = config.get<string>('dbUri');

	try {
		await mongoose.connect(dbUri);
		console.log("Connected to Database");
	} catch (error) {
		console.error("Could not connect to Database");
		process.exit(1);
	}
}