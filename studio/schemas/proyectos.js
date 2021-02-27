export default {
  name: 'proyectos',
  title: 'Proyectos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  {
    name:"place",
    type:"string"
},
  {
    name:"description",
    type:"text"
},  {
  name:"projectType",
  title:"Project type",
  type:"string",
  options:{
      list: [
          {value:"personal", title:"Personal"},
          {value:"client", title:"Client"},
      ],
  },
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
      name:"link",
      type:"url",
  },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },

  },
}
