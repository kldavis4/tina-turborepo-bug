import type { Collection } from 'tinacms'

export const Campaigns: Collection = {
  label: 'Campaigns',
  name: 'campaigns',
  path: 'content/campaigns',
  format: 'md',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    filename: {
      readonly: true,
      slugify: () => `campaigns`,
    },
  },
  fields: [
    {
      type: 'image',
      name: 'image',
      label: 'Image',
      required: true,
    },
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      required: true,
    },
    {
      type: 'string',
      name: 'lead',
      label: 'Lead',
      required: true,
    },
    {
      type: 'object',
      name: 'campaigns',
      label: 'Campaigns',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.title }),
      },
      fields: [
        {
          label: 'Image',
          name: 'image',
          type: 'image',
          required: true,
        },
        {
          type: 'string',
          name: 'company',
          label: 'Company',
          required: true,
        },
        {
          type: 'string',
          name: 'title',
          label: 'Title',
          required: true,
        },
        {
          type: 'string',
          name: 'description',
          label: 'Description',
          required: true,
        },
        {
          type: 'object',
          name: 'cta',
          label: 'CTA',
          required: true,
          fields: [
            {
              type: 'string',
              name: 'title',
              label: 'Title',
              required: true,
            },
            {
              type: 'string',
              name: 'url',
              label: 'URL',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
