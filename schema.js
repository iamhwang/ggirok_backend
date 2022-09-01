import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

const typeArray = loadFilesSync(`${__dirname}/schema/**/*.typeDefs.js`);
const resolverArray = loadFilesSync(`${__dirname}/schema/**/*.resolvers.js`);

export const typeDefs = mergeTypeDefs(typeArray);
export const resolvers = mergeResolvers(resolverArray);