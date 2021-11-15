export const appConfig = {
  routes: {
    admin: {
      index: 'admin',
      child: [
        {
          article: {
            index: 'article',
            detail: 'article/:id',
            add: 'article/add',
            edit: 'article/:id/edit'
          },
          aboutMe: {
            index: 'about-me',
          },
        }
      ]
    },
    article: {
      index: 'article',
      details: 'article/:id'
    },
    aboutMe: {
      index: 'about-me',
      child: {
        expertise: {
          index: 'expertise'
        },
        journey: {
          index: 'journey'
        }
      },
    },
    home: {
      index: '',
    },

  },
};
