export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    },
    {
      name: 'visibility',
      title: 'Visibility',
      type: 'string',
    },
    {
      name: 'workingNow',
      title: 'WorkingNow',
      type: 'string',
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
    {
      name: 'linkToSource',
      title: 'LinkToSource',
      type: 'url',
    },
    {
      name: 'linkToPost',
      title: 'LinkToPost',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    },
    {
      name: 'publishedAt',
      title: 'PublishedAt',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
