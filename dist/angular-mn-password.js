"use strict";function MnPasswordDirective($compile,$parse){function link(scope,element,attributes){var input=element.find("input");element[0].value=$parse(attributes.ngModel)(scope),input.attr("ng-model",attributes.ngModel),$compile(input)(scope)}return{restrict:"E",link:link,require:"ngModel"}}angular.module("mn-password",[]),MnPasswordDirective.$inject=["$compile","$parse"],angular.module("mn-password").directive("mnPassword",MnPasswordDirective);
//# sourceMappingURL=angular-mn-password.js.map