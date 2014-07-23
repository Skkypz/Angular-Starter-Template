angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: ''
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html',
        controller: ''
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'partials/portfolio.html',
        controller: ''
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html',
        controller: ''
      })
  }])