export const models = `
  type Person {
    id: ID
    uid: String
    first_name: String
    last_name: String
    followers_count: String
    sex: String
    city: String
    bdate: String
    crop_photo_url: String
    status: String
    createdAt: String
    updatedAt: String
  }

  type Tag {
    id: ID
    name: String
    status: String
    kind: String
  }

  type Group {
    id: ID
    name: String
    members_count: String
    note: String
    createdAt: String
    updatedAt: String
  }
`
const inputs = `
  input GroupInput {
    name: String
    members_count: String
    note: String
  }

  input tagInput {
    name: string
    status: string
    kind: string
  }

  input TagFilterInput {
    name: string
    status: string
  }

  input PersonInput {
    uid: String
    first_name: String
    last_name: String
    followers_count: String
    sex: String
    city: String
    bdate: String
    crop_photo_url: String
    status: String
  }

  input IdInput {
    id: ID!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }
`
export const typeDefs = models + inputs
