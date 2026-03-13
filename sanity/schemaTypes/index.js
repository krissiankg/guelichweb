import { postType } from './postType'
import { categoryType } from './categoryType'
import { authorType } from './authorType'

export const schema = {
  types: [postType, authorType, categoryType],
}
