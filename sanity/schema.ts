import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import project from './schemas/project'
import { youtube } from './schemas/youtube'
import { twitter } from './schemas/twitter'
import gallery from './schemas/gallery'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [youtube,twitter,gallery,post, author, category,project, blockContent],

}
