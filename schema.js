export const typeDefs = `#graphql
    type Album {
        id: ID!
        title: String!
        artist: String!
        publisher: String!
        score: Int!
        genre: [String!]!
        releasedYear: Int!
    }

    type Review {
        id: ID!
        source: String!
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean
    }

    type Query {
        reviews: [Review]
        albums: [Album]
        authors: [Author]
    }
`;

// GraphQL datatypes
// int
// float
// string
// boolean
// ID - key for data objects
