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
        review(id: ID!): Review
        albums: [Album]
        album(id: ID!): Album
        authors: [Author]
        author(id: ID!): Author
    }
`;

// GraphQL datatypes
// int
// float
// string
// boolean
// ID - key for data objects
