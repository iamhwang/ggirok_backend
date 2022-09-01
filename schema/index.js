import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const typeArray = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const resolverArray = loadFilesSync(`${__dirname}/**/*.resolvers.js`);

export const typeDefs = mergeTypeDefs(typeArray);
export const resolvers = mergeResolvers(resolverArray);