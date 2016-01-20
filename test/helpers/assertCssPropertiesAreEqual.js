(global => {
  const { getComputedStyle, expect } = global;

  global.assertCssPropertiesAreEqual = (element, properties) => {
    const computedStyle = getComputedStyle(element);

    properties.forEach(property => {
      const propertyName = property[0];
      const expected = property[1];
      const actual = computedStyle[propertyName];

      if (Array.isArray(expected)) {
        let error = false;

        for (let i = 0, l = expected.length; i < l; i++) {
          try {
            expect(actual).to.equal(expected[i], `property '${propertyName}'`);
            error = false;
            break;
          } catch(e) {
            error = e;
          }
        }

        if (error) {
          throw error;
        }
      } else {
        expect(actual).to.equal(expected, `property '${propertyName}'`);
      }
    });
  };

})(window);
