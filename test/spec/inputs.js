/* global fixture hexToRgb assertCssPropertiesAreEqual getElementById */
describe('inputs', () => {

  afterEach(() => {
    fixture.cleanup();
  });

  beforeEach(() => {
    fixture.load('inputs/inputs.html');
  });

  describe('default', () => {

    it('should match the design spec for default inputs', () => {
      assertCssPropertiesAreEqual(getElementById('input'), [
        ['border-radius', ''],
        ['font-weight', 'normal'],
        ['display', 'inline-block'],
        ['font-size', '16px'],
        ['height', '36px']
      ]);
    });
  });
});
