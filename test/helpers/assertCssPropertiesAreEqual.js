(global => {
  const { getComputedStyle, expect } = global;

  global.assertCssPropertiesAreEqual = (element, properties) => {
    const computedStyle = getComputedStyle(element);

    properties.forEach(property => {
      const propertyName = property[0];
      const expected = property[1];
      const actual = computedStyle[propertyName];

      expect(actual).to.equal(expected, `property '${propertyName}'`);
    });
  };

})(window);
