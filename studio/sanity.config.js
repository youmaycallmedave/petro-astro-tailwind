import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemas } from './schemas/index.js'

export default defineConfig({
  name: 'petrosky',
  title: 'PetroSky Studio',
  projectId: '4qz38pes',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
})
