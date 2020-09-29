export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f733744762385b0c1ad9d29',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7hkj8hyt',
                  apiId: '0699677e-c186-4d95-b051-007cbc71d9eb'
                },
                {
                  buildHookId: '5f733745a936b7bf22e6070f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ke43szfk',
                  apiId: 'fa7240af-8ace-4acb-8610-8ea37ebb0b4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Haugenandre/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ke43szfk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
