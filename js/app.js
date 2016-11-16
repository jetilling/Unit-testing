angular.module('codeWars', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('kata', {
      url: '/',
        views: {
          "dashboard@": {
            controller: 'kataCtrl',
            templateUrl: '../views/kata-selection.html'
          }
        }
    })
})
