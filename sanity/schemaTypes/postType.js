import {DocumentTextIcon} from '@sanity/icons'

export const postType = {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Français', value: 'fr' },
          { title: 'English', value: 'en' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'fr',
    },
    {
      name: 'translation',
      title: 'Version traduite (FR ↔ EN)',
      type: 'reference',
      to: [{type: 'post'}],
      description:
        'Article équivalent dans l’autre langue. Le nom du champ est « translation ». Le remplir sur une seule des deux versions suffit.',
      validation: (Rule) =>
        Rule.custom(async (value, context) => {
          if (!value?._ref) return true
          const currentLanguage = context.document?.language
          const id = value._ref.replace(/^drafts\./, '')
          const language = await context.getClient({apiVersion: '2024-03-13'}).fetch(
            `*[_id in [$id, $draftId]][0].language`,
            {id, draftId: `drafts.${id}`}
          )
          if (language && currentLanguage && language === currentLanguage) {
            return 'Choisis l’article dans l’autre langue.'
          }
          return true
        }),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
            {
              name: 'link',
              type: 'url',
              title: 'Lien (URL Affiliation / Externe)',
              description: 'Ajoutez un lien pour rendre l\'image cliquable.',
            }
          ]
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author, language} = selection
      const subtitle = [language && language.toUpperCase(), author && `by ${author}`]
        .filter(Boolean)
        .join(' · ')
      return Object.assign({}, selection, {subtitle})
    },
  },
}
