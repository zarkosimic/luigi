import {
  projectsNavProviderFn,
} from './helpers';

const baseUrl = 'http://localhost:3000';

class Navigation {

  nodes = [
    {
      pathSegment: 'docs',
      label: 'Overview',
      viewUrl: baseUrl + '/docs',
      // hideSideNav: true,
      // hideFromNav: true,
      children: [
          'luigi-client-api',
          'luigi-core-api',
        ].map((name) => ({
          label: name,
          pathSegment: name,
          navigationContext: 'doc',
          keepSelectedForChildren: true,
          viewUrl: `${baseUrl}/docs/${name}`,
          context: {
            doc: name
          }
        })
      )
    },
    // {
    //   pathSegment: 'users',
    //   label: 'Users',
    //   viewUrl: baseUrl + '/users',
    //   hideSideNav: true,
    //   children: [{
    //     navigationContext: 'user',
    //     pathSegment: ':userId',
    //     viewUrl: baseUrl + '/users/:userId',
    //     context: {
    //       userId: ':userId'
    //     },
    //     hideSideNav: true
    //   }]
    // },
    // {
    //   pathSegment: 'blog',
    //   label: 'Blog',
    //   viewUrl: baseUrl + '/blog',
    //   children: ['First', 'Second', 'Third'].map((m) => ({
    //     label: m,
    //     pathSegment: m.toLowerCase(),
    //     viewUrl: `${baseUrl}/blog/${m.toLowerCase()}`
    //   }))
    // }
  ];

  // getContextSwitcherActions = () => {
  //   const actions = [
  //     {
  //       label: '+ New Environment (top)',
  //       link: '/create-environment'
  //     },
  //     {
  //       label: '+ New Project',
  //       link: '/projects',
  //       position: 'bottom',
  //       clickHandler: node => {
  //         const p = addProject();
  //         Luigi.setConfig(Luigi.getConfig());
  //         Luigi.showAlert({
  //           text: `${p.name} created.`,
  //           type: 'info',
  //           closeAfter: 3000
  //         });
  //         return true;
  //       }
  //     }
  //   ];

  //   if (getProjectCount() > 0) {
  //     actions.push({
  //       label: '\u2212 Remove Project',
  //       link: '/projects',
  //       position: 'bottom',
  //       clickHandler: node => {
  //         const p = removeProject();
  //         Luigi.setConfig(Luigi.getConfig());
  //         Luigi.showAlert({
  //           text: `${p.name} removed.`,
  //           type: 'info',
  //           closeAfter: 3000
  //         });
  //         return true;
  //       }
  //     });
  //   }

  //   return actions;
  // };

  // The following configuration will be used to render the context switcher component
  // contextSwitcher = {
  //   defaultLabel: 'Select Environment ...',
  //   parentNodePath: '/environments', // absolute path
  //   lazyloadOptions: true, // load options on click instead on page load
  //   options: () =>
  //     [...Array(10).keys()]
  //       .filter(n => n !== 0)
  //       .map(n => ({
  //         label: 'Environment ' + n, // (i.e mapping between what the user sees and what is taken to replace the dynamic part for the dynamic node)
  //         pathValue: 'env' + n // will be used to replace dynamic part
  //       })),
  //   actions: this.getContextSwitcherActions,

  //   /**
  //    * fallbackLabelResolver
  //    * Resolve what do display in the context switcher (Label) in case the activated
  //    * context (option) is not listed in available options (eg kyma-system namespace),
  //    * or if options have not been fetched yet
  //    */
  //   fallbackLabelResolver: id => id.replace(/\b\w/g, l => l.toUpperCase())
  // };

  getProductSwitcherItems = () => {
    const items = [
      {
        icon:
          'https://pbs.twimg.com/profile_images/1143452953858183170/QLk-HGmK_bigger.png',
        label: 'hybris',
        externalLink: {
          url: 'https://www.hybris.com',
          sameWindow: false
        }
      }
    ];
    return items;
  };

  // The following configuration will be used to render a product switcher component
  // productSwitcher = {
  //   items: this.getProductSwitcherItems
  // };

  getProfileItems = () => {
    const items = [
      {
        label: 'Luigi in Github',
        externalLink: {
          url: 'https://github.com/SAP/luigi',
          sameWindow: false
        }
      }
    ];
    return items;
  };

  // profile = {
  //   logout: {
  //     label: 'End session'
  //     // icon: "sys-cancel",
  //   },
  //   items: this.getProfileItems
  // };
}

export const navigation = new Navigation();
