describe('type', () => {

  afterEach(() => {
    fixture.cleanup();
  });

  describe('labels', () => {

    beforeEach(() => {
      fixture.load('labels.html');
    });

    describe('default', () => {

      it('should match the design spec', () => {
        assertCssPropertiesAreEqual(getElementById('label'), [
          ['color', 'rgb(35, 31, 32)'],
          ['font-size', '14px'],
          ['line-height', '16px'],
          ['font-weight', 'normal']
        ]);
      });
    });

    describe('secondary', () => {

      it('should match the design spec', () => {
        assertCssPropertiesAreEqual(getElementById('label-secondary'), [
          ['color', 'rgb(86, 86, 86)'],
          ['font-size', '14px'],
          ['line-height', '16px'],
          ['font-weight', 'normal']
        ]);
      });
    });

    describe('sizes', () => {

      it('should match the design spec when the label is small', () => {
        assertCssPropertiesAreEqual(getElementById('label-small'), [
          ['font-size', '13px'],
          ['line-height', '15px']
        ]);
      });

      it('should match the design spec when the label is large', () => {
        assertCssPropertiesAreEqual(getElementById('label-large'), [
          ['font-size', '16px'],
          ['line-height', '18px']
        ]);
      });
    });

    describe('weights', () => {

      it('should match the design spec when the weight is bold', () => {
        assertCssPropertiesAreEqual(getElementById('label-bold'), [
          ['font-weight', 'bold']
        ]);
      });
    });

    describe('inverse', () => {

      it('should match the design spec', () => {
        assertCssPropertiesAreEqual(getElementById('label-inverse'), [
          ['color', 'rgb(255, 255, 255)']
        ]);
      });

      it('should match the design spec when it is a secondary label', () => {
        assertCssPropertiesAreEqual(getElementById('label-secondary-inverse'), [
          ['color', 'rgb(174, 174, 174)']
        ]);
      });
    });
  });
});
