// @flow

import { ApolloServer } from 'apollo-server';

export type GraphQLContextType = {|
  +dataLoaders: {},
|};

export default async ({
  req,
  connection,
}: ApolloServer): Promise<GraphQLContextType> => {
  if (connection) {
    throw Error('Subscription not supported.');
  }

  // TODO - Authorization header will be checked here and added to context.
  return {
    dataLoaders: {
      // TODO - Add imported dataloaders here.
    },
  };
};
