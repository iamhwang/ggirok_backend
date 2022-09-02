import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const typeArray = loadFilesSync(`${__dirname}/**/*.typeDef.js`);
const resolverArray = loadFilesSync(`${__dirname}/**/*.resolver.js`);
console.log(`${__dirname}`)
console.log(typeArray)
export const typeDefs = mergeTypeDefs(typeArray);
export const resolvers = mergeResolvers(resolverArray);