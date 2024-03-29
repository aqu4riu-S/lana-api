import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//types
import { typeDefs } from "./schema.js";
// db
import loadFiles from "./_db.js";

async function main() {
  const db = await loadFiles();

  const resolvers = {
    // resolvers for the root query types
    Query: {
      albums() {
        // we do not need to specify the fields of the object
        // apollo server does that for us :)
        return db.albums;
      },

      album(_, args) {
        return db.albums.find((album) => album.id === args.id);
      },

      reviews() {
        return db.reviews;
      },

      review(_, args) {
        return db.reviews.find((review) => review.id === args.id);
      },

      authors() {
        return db.authors;
      },

      author(_, args) {
        return db.authors.find((author) => author.id === args.id);
      },
    },

    Album: {
      reviews(parent) {
        return db.reviews.filter((review) => review.album_id === parent.id);
      },
    },

    Author: {
      reviews(parent) {
        return db.reviews.filter((review) => review.author_id === parent.id);
      },
    },

    Review: {
      album(parent) {
        return db.albums.find((album) => album.id === parent.album_id);
      },

      author(parent) {
        return db.authors.find((author) => author.id === parent.author_id);
      },
    },
  };

  const server = new ApolloServer({
    // typeDefs - description of data types and relatioships between them
    // structure the graph
    typeDefs,
    // resolvers (functions)
    // handle the queries based on the schema structure
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log("Server ready at port", 4000);
}

main();
