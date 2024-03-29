import { VkFetch } from "api/services/fetch"

export const VkQuery = {
  persons: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data.persons
  },
  groups: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data.groups
  },
  tags: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data.tags
  },
}

export const VkMutation = {
  createPerson: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data
  },

  updatePerson: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data
  },

  deletePerson: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data
  },

  createGroup: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data
  },

  updateGroup: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data
  },

  deleteGroup: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data
  },

  createTag: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data
  },

  updateTag: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data
  },

  deleteTag: async (_, args, context, info) => {
    const response = await VkFetch(context.body)
    if (response.errors) { throw new Error(response.errors[0].message) }
    return response.data
  },
}
