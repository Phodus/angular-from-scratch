var app = angular.module('myApp', [
    'ui.router'
    ])
.run(function() {

})
.config(function($provide) {
   $provide.decorator('$exceptionHandler', ['$delegate',
     function($delegate) {
       return function(exception, cause) {
         console.error('ERROR manager: to log with other service');

         if(exception.message !== undefined) {
             console.error(exception.message);
             console.error(exception);
         }
         else {
             console.error(exception);
         }

         $delegate(exception, cause);
       };
     }
   ]);
 })
 .factory('errorTrigger', function() {
   return function(exception) {
       log('errorTrigger');
       if(exception.message !== undefined) {
           console.error(exception.message);
       }

       if(exception.status !== undefined && exception.status === 401) {
           console.log('must logout');
       }
   }
 })
 ;
