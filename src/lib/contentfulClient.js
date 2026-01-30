import { createClient } from 'contentful'

// Credentials per requirement
const SPACE_ID = 'jbrovexdjegl'
const ACCESS_TOKEN = 'nbm7sXqVfvOjK3Cg11TLttG5C5rZLtkVWOBoCXQUKWo'

export const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})
