import parseArgs from "minimist";
const args = parseArgs(process.argv);
import { greet } from "./index.js";
const drunk = args.drunk;
const name = args._[2];
greet(name, drunk);
