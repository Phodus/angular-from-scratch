app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeCtrl',
        data:{ pageTitle: 'Home' }
    });

    $urlRouterProvider.otherwise('/home');
});
