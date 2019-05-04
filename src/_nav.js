export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
   
    {
      name: 'Users',
      url: '/users/manageusers',
      icon: 'icon-people',
      children: [
        {
          name: 'Manage users',
          url: '/users/manageusers',
          icon: 'icon-people'
        },

      ]
    },
    {
      name: 'Reports',
      url: '/reports/reports',
      icon: 'icon-report',
      children: [
        {
          name: 'Print Reports',
          url: '/reports/reports',
          icon: 'icon-report'
        },

      ]
    },

  ]
}
