import {TagIcon} from '@sanity/icons'

export const categoryType = {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
