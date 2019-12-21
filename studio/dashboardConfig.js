export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dfe48df64a22c37609759ce',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vfena2kq',
                  apiId: '20e99cb1-41f1-40be-863f-188145c28bc2'
                },
                {
                  buildHookId: '5dfe48df31224447460b4f26',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-f38zoxg3',
                  apiId: '88ae1755-8ab4-4d21-bda9-d898d18d5268'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dv297/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-f38zoxg3.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
