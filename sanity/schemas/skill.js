export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 to 100%',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Color of Skill',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      description: 'Background Color of Skill',
    },
    {
      name: 'borderColor',
      title: 'Border Color',
      type: 'string',
      description: 'Border Color of Skill',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
