export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'url',
      title: 'Url',
      description: 'Url of Post',
      type: 'url',
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Title of Post',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of Post',
      options: {
        hotspot: true,
      },
    },
  ],
};
