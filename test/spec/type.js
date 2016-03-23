/* global fixture hexToRgb assertCssPropertiesAreEqual getElementById expect */
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
        assertCssPropertiesAreEqual(getElementById('label-inverse-weight'), [
          ['font-weight', ['light', '300']]
        ]);
      });
    });
  });

  // Titles
  describe('titles', () => {

    beforeEach(() => {
      fixture.load('type/titles.html');
    });

    describe('sizes and height', () => {

      it('should match the design spec where it is a default title', () => {
        assertCssPropertiesAreEqual(getElementById('default-title'), [
          ['font-size', '18px'],
          ['line-height', '22px']
        ]);
      });

      it('should match the design spec where it is a large title', () => {
        assertCssPropertiesAreEqual(getElementById('large-title'), [
          ['font-size', '20px'],
          ['line-height', '24px']
        ]);
      });

      it('should match the design spec where it is a XLarge title', () => {
        assertCssPropertiesAreEqual(getElementById('XLarge-title'), [
          ['font-size', '22px'],
          ['line-height', '28px']
        ]);
      });
      // Tests to be added: for  @media (min-width)
    });
  });

  // Copy
  describe('copy', () => {

    beforeEach(() => {
      fixture.load('type/copy.html');
    });

    describe('copy', () => {

      it('should match the design spec where it is a copy', () => {
        assertCssPropertiesAreEqual(getElementById('copy'), [
          ['font-size', '16px'],
          ['line-height', '22px'],
          ['color', 'rgb(35, 31, 32)']
        ]);
      });
    });
  });

  // Lead
  describe('leads', () => {

    beforeEach(() => {
      fixture.load('type/lead.html');
    });

    describe('lead', () => {

      it('should match the design spec where it is a lead', () => {
        assertCssPropertiesAreEqual(getElementById('lead'), [
          ['font-size', '18px'],
          ['line-height', '24px'],
          ['color', 'rgb(35, 31, 32)'],
          ['font-weight', '200']
        ]);
      });
      // Tests to be added: for  @media (min-width)
    });
  });


  // Inline Elements
  describe('inline elements', () => {

    beforeEach(() => {
      fixture.load('type/inline.html');
    });

    describe('mark', () => {

      it('should match the design spec where it is mark', () => {
        assertCssPropertiesAreEqual(getElementById('inline-mark'), [
          ['background-color', 'rgb(253, 236, 46)']
        ]);
      });
    });

    it('should match the design spec where it is subscript', () => {
      assertCssPropertiesAreEqual(getElementById('subscript'), [
        ['font-size', ['14px', '14.4px']],
        ['top', ['3px', '3.2px']],
        ['position', 'relative']
      ]);
    });

    it('should match the design spec where it is superscript', () => {
      assertCssPropertiesAreEqual(getElementById('supscript'), [
        ['font-size', ['14px', '14.4px']],
        ['top', ['-3px', '-3.2px']],
        ['position', 'relative']
      ]);
    });

    it('should match the design spec where it is abbr', () => {
      assertCssPropertiesAreEqual(getElementById('abbr'), [
        ['border-bottom-width', '1px'],
        ['border-bottom-style', 'dotted']
      ]);
    });

    it('should match the design spec where it is strikethrough', () => {
      assertCssPropertiesAreEqual(getElementById('strikethrough'), [
        ['color', 'rgb(86, 86, 86)']
      ]);
    });

    it('should match the design spec where it is smallTag', () => {
      assertCssPropertiesAreEqual(getElementById('smallTag'), [
        ['font-size', '16px']
      ]);
    });

    it('should match the design spec where it is timeTag', () => {
      assertCssPropertiesAreEqual(getElementById('timeTag'), [
        ['font-size', '16px'],
        ['line-height', '22px'],
        ['color', 'rgb(35, 31, 32)']
      ]);
    });

    it('should match the design spec where it is emTag', () => {
      assertCssPropertiesAreEqual(getElementById('emTag'), [
        ['font-style', 'italic'],
        ['font-size', '16px'],
        ['line-height', '22px'],
        ['color', 'rgb(35, 31, 32)']
      ]);
    });

    it('should match the design spec where it is iTag', () => {
      assertCssPropertiesAreEqual(getElementById('iTag'), [
        ['font-style', 'italic'],
        ['font-size', '16px'],
        ['line-height', '22px'],
        ['color', 'rgb(35, 31, 32)']
      ]);
    });

    it('should match the design spec where it is bTag', () => {
      assertCssPropertiesAreEqual(getElementById('bTag'), [
        ['font-weight', 'bold']
      ]);
    });

    it('should match the design spec where it is strongTag', () => {
      assertCssPropertiesAreEqual(getElementById('strongTag'), [
        ['font-weight', 'bold']
      ]);
    });

    it('should match the design spec where it is delTag', () => {
      assertCssPropertiesAreEqual(getElementById('delTag'), [
        ['text-decoration', 'line-through']
      ]);
    });

    it('should match the design spec where it is insTag', () => {
      assertCssPropertiesAreEqual(getElementById('insTag'), [
        ['text-decoration', 'underline']
      ]);
    });

    it('should match the design spec where it is insTag: before', () => {
      // did not want to disturb the common library(assertCssPropertiesAreEqual)
      const symb = window.getComputedStyle(document.querySelector('ins'), ':before').getPropertyValue('content');
      expect(symb).to.equal('\'+\'');
    });

    it('should match the design spec where it is insTag: after', () => {
      // did not want to disturb the common library(assertCssPropertiesAreEqual)
      const symb = window.getComputedStyle(document.querySelector('ins'), ':after').getPropertyValue('content');
      expect(symb).to.equal('\'+\'');
    });

    it('should match the design spec where it is quote', () => {
      assertCssPropertiesAreEqual(getElementById('qTag'), [
        ['display', 'inline']
      ]);
    });
  });

  // Lists
  describe('lists', () => {

    beforeEach(() => {
      fixture.load('type/lists.html');
    });

    it('should match the design spec where it is pe lists', () => {
      assertCssPropertiesAreEqual(getElementById('pe-lists'), [
        ['color', 'rgb(35, 31, 32)'],
        ['font-size', '16px'],
        ['line-height', '22px'],
        ['font-weight', 'normal']
      ]);
    });

    it('should match the design spec where it is unstyled lists', () => {
      assertCssPropertiesAreEqual(getElementById('styled-lists'), [
        ['padding-left', '26px'],
        ['list-style-type', 'disc']
      ]);
    });

    it('should match the design spec where it is nested unstyled lists', () => {
      assertCssPropertiesAreEqual(getElementById('nested-styled-lists'), [
        ['padding-left', '20px'],
        ['list-style-type', 'lower-alpha']
      ]);
    });

    // List unordered tests
    it('should match the design spec where it is unstyled lists, unordered', () => {
      assertCssPropertiesAreEqual(getElementById('styled-lists-unordered'), [
        ['padding-left', '26px'],
        ['list-style-type', 'disc']
      ]);
    });

    it('should match the design spec where it is nested unstyled lists, unordered', () => {
      assertCssPropertiesAreEqual(getElementById('nested-styled-lists-unordered'), [
        ['padding-left', '20px'],
        ['list-style-type', 'circle']
      ]);
    });

  //  it('should match the design spec where it is Inline lists', () => {
  //    assertCssPropertiesAreEqual(getElementById('inline-lists'), [
  //      ['padding-left', '0px'],
  //      ['list-style-type', 'none'],
  //      ['margin-left', '-5px']
  //    ]);
  //  });
    // one more test to add for inline list pe-list--inline > li
  });

  // Code
  describe('code', () => {

    beforeEach(() => {
      fixture.load('type/code.html');
    });

    it('should match the design spec where it is inline code', () => {
      assertCssPropertiesAreEqual(getElementById('inline-code'), [
        ['color', 'rgb(84, 84, 84)'],
        ['font-size', '16px'],
        ['font-family', '\'Lucida Sans Typewriter\', \'Lucida Console\', monaco, \'Bitstream Vera Sans Mono\', monospace']
      ]);
    });

    it('should match the design spec where it is Block code', () => {
      assertCssPropertiesAreEqual(getElementById('block-code'), [
        ['display', 'block'],
        ['overflow-x', 'auto'],
        ['overflow-y', 'auto'],
        ['font-size', '16px'],
        ['font-family', '\'Lucida Sans Typewriter\', \'Lucida Console\', monaco, \'Bitstream Vera Sans Mono\', monospace']
      ]);
    });

    it('should match the design spec where it is user input', () => {
      assertCssPropertiesAreEqual(getElementById('user-input'), [
        ['background-color', 'rgb(51, 51, 51)'],
        ['color', 'rgb(255, 255, 255)'],
        ['border-bottom-left-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['box-sizing', 'border-box'],
        ['padding-bottom', '2px'],
        ['padding-top', '2px'],
        ['padding-left', '4px'],
        ['padding-right', '4px'],
        ['font-family', '\'Lucida Sans Typewriter\', \'Lucida Console\', monaco, \'Bitstream Vera Sans Mono\', monospace']
      ]);
    });
  });
});
