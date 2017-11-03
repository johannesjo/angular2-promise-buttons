// tslint:disable
/**
 * @copyright Angular ng-bootstrap team
 */
beforeEach(() => {
  jasmine.addMatchers({
    toHaveCssClass(/*util, customEqualityTests*/) {
      return {compare: buildError(false), negativeCompare: buildError(true)};

      function buildError(isNot: any) {
        return function (actual: any, className: any) {
          const orNot = isNot ? 'not ' : '';
          return {
            pass: actual.classList.contains(className) === !isNot,
            message: `Expected ${actual.outerHTML} ${orNot} to contain the CSS class "${className}"`
          };
        };
      }
    }
  });
});
