describe('type', () => {

  afterEach(() => {
    fixture.cleanup();
  });

  describe('labels', () => {

    beforeEach(() => {
      fixture.load('type/labels.html');
    });

    describe('default', () => {

      it('should match the design spec', () => {
        assertCssPropertiesAreEqual(getElementById('label'), [
          ['color', 'rgb(35, 31, 32)'],
          ['font-size', '14px'],
          ['line-height', '16px'],
          ['font-weight', ['normal', '400']]
        ]);
      });
    });

    describe('secondary', () => {

      it('should match the design spec', () => {
        assertCssPropertiesAreEqual(getElementById('label-secondary'), [
          ['color', 'rgb(86, 86, 86)'],
          ['font-size', '14px'],
          ['line-height', '16px'],
          ['font-weight', ['normal', '400']]
        ]);
      });
    });

    describe('sizes', () => {

      it('should match the design spec when the label is small', () => {
        assertCssPropertiesAreEqual(getElementById('label-small'), [
          ['font-size', ['13px', '13.008px']],
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
          ['font-weight', ['bold', '700']]
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
      
      it('should match the design spec with inverse weight it light', () => {
        assertCssPropertiesAreEqual(getElementById('label-inverse-weight'),[
          ['font-weight',['light','300']]
          ]);
      });      
    });
  });

  //Titles
  describe('titles', () => {

    beforeEach(() => {
      fixture.load('type/titles.html');
    });

    describe('sizes and height',() => {

      it('should match the design spec where it is a default title',() => {
        assertCssPropertiesAreEqual(getElementById('default-title'),[
          ['font-size','18px'],
          ['line-height','22px']
          ]);
      });
      
      it('should match the design spec where it is a large title',() => {
        assertCssPropertiesAreEqual(getElementById('large-title'),[
          ['font-size','20px'],
          ['line-height','24px']
          ]);
      });

      it('should match the design spec where it is a XLarge title',() => {
        assertCssPropertiesAreEqual(getElementById('XLarge-title'),[
          ['font-size','22px'],
          ['line-height','28px']
          ]);
      });
      //Tests to be added: for  @media (min-width
    });
  });

  //Copy
  describe('copy',() => {

    beforeEach(() => {
      fixture.load('type/copy.html');
    });

    describe('copy',() => {

      it('should match the design spec where it is a copy',() => {
        assertCssPropertiesAreEqual(getElementById('copy'),[
          ['font-size','16px'],
          //['line-height','22px'],
          ['color','rgb(35, 31, 32)']
          ]);
      });
    });
  });

  //Lead
  describe('leads',() => {

    beforeEach(() => {
      fixture.load('type/lead.html');
    });

    describe('lead',() => {

      it('should match the design spec where it is a lead',() => {
        assertCssPropertiesAreEqual(getElementById('lead'),[
          ['font-size','18px'],
          ['line-height','24px'],
          ['color','rgb(35, 31, 32)'],
          ['font-weight','200']
          ]);
      });
      //Tests to be added: for  @media (min-width)
    });
  });

});
