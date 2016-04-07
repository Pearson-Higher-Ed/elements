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
        ['vertical-align', 'middle'],
        ['font-size', '16px'],
        ['height', '36px']
      ]);
    });
  });

  describe('Small text input', () => {

    it('should match the design spec for Small text inputs', () => {
      assertCssPropertiesAreEqual(getElementById('pe-input-small'), [
        ['color', 'rgb(35, 31, 32)'],
        ['background-color', 'rgb(255, 255, 255)'],
        ['font-weight', 'normal'],
        ['display', 'inline-block'],
        ['vertical-align', 'middle'],
        ['font-size', '14px'],
        ['height', '28px'],
        ['line-height', '16px']
      ]);
    });
  });

  describe('Basic text input placeholder', () => {

    it('should match the design spec for basic text input placeholder', () => {
      assertCssPropertiesAreEqual(getElementById('pe-input-basicplaceholder'), [
        ['color', 'rgb(109, 109, 109)'],
        ['background-color', 'rgb(255, 255, 255)']
      ]);
    });
  });
});
