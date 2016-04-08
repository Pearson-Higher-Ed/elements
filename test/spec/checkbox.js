/* global fixture hexToRgb assertCssPropertiesAreEqual getElementById */
describe('checkbox', () => {
  afterEach(() => {
    fixture.cleanup();
  });

  beforeEach(() => {
    fixture.load('inputs/checkbox.html');
  });


  describe('pe-checkbox', () => {
    it('should match the design spec for checkbox', () => {
      assertCssPropertiesAreEqual(getElementById('chk-lbl-checked'), [
        ['display', 'inline']
      ]);
    });
  });


  describe('pe-checkbox', () => {
    it('should match the design spec for checkbox', () => {
      assertCssPropertiesAreEqual(getElementById('chk-lbl-unchecked'), [
        ['display', 'inline']
      ]);
    });
  });

  describe('pe-checkbox', () => {
    it('should match the design spec for checkbox', () => {
      assertCssPropertiesAreEqual(getElementById('chk-lbl-disabled'), [
        ['display', 'inline']
      ]);
    });
  });


  describe('pe-checkbox', () => {
    it('should match the design spec for checkbox', () => {
      assertCssPropertiesAreEqual(getElementById('chk-lbl-disabled-checked'), [
        ['display', 'inline']
      ]);
    });
  });
});


