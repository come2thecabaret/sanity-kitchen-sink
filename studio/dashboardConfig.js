export default {
  widgets: [
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
                  buildHookId: '603bac6460b95291a9b3cd4a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-sq5bqrgw',
                  apiId: 'a20e608f-16bd-46bf-993b-95be7e6e0a83'
                },
                {
                  buildHookId: '603bac65d6820595b988839c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zfcanppw',
                  apiId: '7bec5ca9-3349-4dcb-9408-6d508a56c0f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/come2thecabaret/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zfcanppw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
