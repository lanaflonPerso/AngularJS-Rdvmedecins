'use strict';

angular.module("rdvmedecinsApp")
  .directive("waiting", ['utils', function (utils) {
    // instance de la directive retournée
    return {
      // élément HTML
      restrict: "E",
      // url du fragment
      templateUrl: "views/waiting.html",
      // scope unique à chaque instance de la directive
      scope: true,
      // fonction lien avec le document
      link: function (scope, element, attrs) {
        // à chaque fois que attr["model"] change, le modèle de la page doit changer également
        scope.$watch(attrs['model'], function (newValue) {
          utils.debug("[waiting] watch newValue", newValue);
          scope.model = newValue;
        });
      }
    }
  }]);