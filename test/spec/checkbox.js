/* global fixture hexToRgb assertCssPropertiesAreEqual getElementById */
describe('checkbox', () => {
  afterEach(() => {
    fixture.cleanup();
  });

  beforeEach(() => {
    fixture.load('inputs/checkbox.html');
  });


  describe('pe-checkbox-checked', () => {
    it('should match the design spec for checked', () => {
      assertCssPropertiesAreEqual(getElementById('chk-input-checked'), [
        ['height', '15px']
      ]);
    });
  });


  describe('pe-checkbox-unchecked', () => {
    it('should match the design spec for unchecked', () => {
      assertCssPropertiesAreEqual(getElementById('chk-input-unchecked'), [
        ['height', '15px']
      ]);
    });
  });

  describe('pe-checkbox-disabled', () => {
    it('should match the design spec for disabled', () => {
      assertCssPropertiesAreEqual(getElementById('chk-input-disabled'), [
        ['height', '15px']
      ]);
    });
  });


  describe('pe-checkbox-disabled-checked', () => {
    it('should match the design spec for disabled', () => {
      assertCssPropertiesAreEqual(getElementById('chk-input-disabled-checked'), [
        ['height', '22px']
      ]);
    });
  });
});


