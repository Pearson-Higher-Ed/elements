/* global fixture hexToRgb assertCssPropertiesAreEqual getElementById */
describe('radio', () => {
  afterEach(() => {
    fixture.cleanup();
  });

  beforeEach(() => {
    fixture.load('inputs/radiobutton.html');
  });


  describe('pe-radio', () => {
    it('should match the design spec for radio button', () => {
      assertCssPropertiesAreEqual(getElementById('rad-lbl-checked'), [
        ['display', 'inline']
      ]);
    });
  });


  describe('pe-radio', () => {
    it('should match the design spec for radio button', () => {
      assertCssPropertiesAreEqual(getElementById('rad-lbl-unchecked'), [
        ['display', 'inline']
      ]);
    });
  });

  describe('pe-radio', () => {
    it('should match the design spec for radio button', () => {
      assertCssPropertiesAreEqual(getElementById('rad-lbl-disabled'), [
        ['display', 'inline']
      ]);
    });
  });


  describe('pe-radio', () => {
    it('should match the design spec for radio button', () => {
      assertCssPropertiesAreEqual(getElementById('rad-lbl-disabled-checked'), [
        ['display', 'inline']
      ]);
    });
  });
});


