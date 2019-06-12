export default {
  categories: async (root, args, context) => [],
  category: async (root, args, context) => ({ name: '', terms: [] }),

  terms: async (root, args, context) => [],
  term: async (root, args, context) => ({ name: '', terms: [] }),
}
