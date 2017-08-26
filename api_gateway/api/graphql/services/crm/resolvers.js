// const graphqlHTTP = require('express-graphql');
// import { request } from 'graphql-request'

import { createApolloFetch } from 'apollo-fetch'

const uri = 'http://localhost:4002/v1'
const fetch = createApolloFetch({ uri })


export const CrmQuery = {
  clients: async (_, args, context, info) => {
    // const query = `
    //   query clients($pagination: PaginationInput) {
    //     clients(pagination: $pagination) {
    //       id
    //       name
    //       number
    //       phone
    //       note
    //       date_birth
    //     }
    //   }
    // `
    console.log(context.body)
    const resp = await fetch(context.body)
    // const resp = await fetch({ query , args })
    return resp.data.clients
  },

  client: async (_, args) => {
    console.log(1)
  },

  statuses: async (_, args) => {
    console.log(1)
  },

  status: async (root, args) => {
    console.log(1)
  },
}

export const CrmMutation = {
  createClient: async (root, args) => {
    console.log(1)
  },

  updateClient: async (root, args) => {
    console.log(1)
  },

  deleteClient: async (root, { id }) => {
    console.log(1)
  },

  createStatus: async (root, args) => {
    console.log(1)
  },

  updateStatus: async (root, args) => {
    console.log(1)
  },

  deleteStatus: async (root, args) => {
    console.log(1)
  },
}
