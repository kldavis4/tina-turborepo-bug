import { defineConfig } from 'tinacms'

import { Campaigns } from './collections'

const { HEAD, VERCEL_GIT_COMMIT_REF, TINACMS_PROJECT_ID, TINACMS_TOKEN } = process.env

const branch = HEAD || VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: TINACMS_PROJECT_ID,
  token: TINACMS_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
  schema: {
    collections: [Campaigns],
  },
})
