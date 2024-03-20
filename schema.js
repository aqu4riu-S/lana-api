export const typeDefs = `#graphql
    type Album {
        id: ID!
        title: String!
        artist: String!
        publisher: String!
        score: Int!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        source: String!
        rating: Int!
        content: String!
        album: Album!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        reviews: [Review!]
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
