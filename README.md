# graphql-schema-cycles-webapp
This repo contains the code of a Web application that allows users to analyze their GraphQL schemas in terms cycles in the network of relationships between types. For the actual detection and enumeration of such cycles, the application uses our [graphql-schema-cycles
library](https://github.com/LiUGraphQL/graphql-schema-cycles).

To clone this repository and its submodules use the command:

  git clone --recurse-submodules https://github.com/LiUGraphQL/graphql-schema-cycles-webapp.git
  
If you forgot to do this and only cloned the main repository, then you will only get empty folders for the submodules. In this case however, simply run:

git submodules init && git submodules update
