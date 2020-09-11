export const schema = gql`
  type OrgContact {
    id: Int!
    name: String!
    street: String!
    suburb: String!
    postcode: Int!
    coverage: String!
    contactName: String!
    majorPurpose: String!
    contactPN: String!
    meetingTime: DateTime!
    meetingTimeFrequency: String!
    meetingPlace: String!
    webpage: Boolean!
    webpageAddress: String!
    newsletter: Boolean!
    alpMembers: Boolean!
    email: String!
    createdAt: DateTime!
  }

  type Query {
    orgContacts: [OrgContact!]!
    orgContact(id: Int!): OrgContact
  }

  input CreateOrgContactInput {
    name: String!
    street: String!
    suburb: String!
    postcode: Int!
    coverage: String!
    contactName: String!
    majorPurpose: String!
    contactPN: String!
    meetingTime: DateTime!
    meetingTimeFrequency: String!
    meetingPlace: String!
    webpage: Boolean!
    webpageAddress: String!
    newsletter: Boolean!
    alpMembers: Boolean!
    email: String!
  }

  input UpdateOrgContactInput {
    name: String
    street: String
    suburb: String
    postcode: Int
    coverage: String
    contactName: String
    majorPurpose: String
    contactPN: String
    meetingTime: DateTime
    meetingTimeFrequency: String
    meetingPlace: String
    webpage: Boolean
    webpageAddress: String
    newsletter: Boolean
    alpMembers: Boolean
    email: String
  }

  type Mutation {
    createOrgContact(input: CreateOrgContactInput!): OrgContact!
    updateOrgContact(id: Int!, input: UpdateOrgContactInput!): OrgContact!
    deleteOrgContact(id: Int!): OrgContact!
  }
`
