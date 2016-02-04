/* global fixture hexToRgb assertCssPropertiesAreEqual getElementById */
describe('buttons', () => {

  afterEach(() => {
    fixture.cleanup();
  });

  beforeEach(() => {
    fixture.load('buttons/buttons.html');
  });

  describe('default', () => {

    it('should match the design spec for default button', () => {
      assertCssPropertiesAreEqual(getElementById('btn'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(248, 248, 248)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(208, 208, 208)'],
        ['border-right-color', 'rgb(208, 208, 208)'],
        ['border-bottom-color', 'rgb(208, 208, 208)'],
        ['border-left-color', 'rgb(208, 208, 208)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'none']
      ]);
    });

/*
    it('should match the design spec when default button is focused', () => {
      assertCssPropertiesAreEqual(getElementById('btn').focus(), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(230, 230, 230)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(179, 179, 179)'],
        ['border-right-color', 'rgb(179, 179, 179)'],
        ['border-bottom-color', 'rgb(179, 179, 179)'],
        ['border-left-color', 'rgb(179, 179, 179)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'rgba(0, 0, 0, 0.3)']
      ]);
    });*/
  });

  describe('primary', () => {

    it('should match the design spec', () => {
      assertCssPropertiesAreEqual(getElementById('btn-primary'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(255, 255, 255)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(16, 122, 202)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(10, 77, 128)'],
        ['border-right-color', 'rgb(10, 77, 128)'],
        ['border-bottom-color', 'rgb(10, 77, 128)'],
        ['border-left-color', 'rgb(10, 77, 128)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when default button is focused', () => {
      let el = getElementById('btn-primary').focus();
      assertCssPropertiesAreEqual(el, [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(255, 255, 255)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(12, 93, 153)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(10, 77, 128)'],
        ['border-right-color', 'rgb(10, 77, 128)'],
        ['border-bottom-color', 'rgb(10, 77, 128)'],
        ['border-left-color', 'rgb(10, 77, 128)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'rgb(0, 0, 0)']
      ]);
    });*/
  });

  describe('link', () => {

    it('should match the design spec when styled as a link', () => {
      assertCssPropertiesAreEqual(getElementById('btn-link'), [
        ['padding', ''],
        ['color', 'rgb(13, 101, 166)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'underline'],
        ['background-color', 'rgba(0, 0, 0, 0)'],
        ['border-width', ''],
        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when styled as a focused link', () => {
      let el = getElementById('btn-link').focus();
      assertCssPropertiesAreEqual(el, [
        ['padding', ''],
        ['color', 'rgb(9, 72, 119)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color', 'rgba(0, 0, 0, 0)'],
        ['border-width', ''],
        ['box-shadow', 'none']
      ]);
    });*/
  });

  describe('fake-div', () => {

    it('should match the design spec when a div is styled as a button', () => {
      assertCssPropertiesAreEqual(getElementById('btn-div'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(248, 248, 248)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(208, 208, 208)'],
        ['border-right-color', 'rgb(208, 208, 208)'],
        ['border-bottom-color', 'rgb(208, 208, 208)'],
        ['border-left-color', 'rgb(208, 208, 208)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when a focused div is styled as a button', () => {
      let el = getElementById('btn-div').focus();
      assertCssPropertiesAreEqual(el, [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(230, 230, 230)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(179, 179, 179)'],
        ['border-right-color', 'rgb(179, 179, 179)'],
        ['border-bottom-color', 'rgb(179, 179, 179)'],
        ['border-left-color', 'rgb(179, 179, 179)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'rgba(0, 0, 0, 0.3)']
      ]);
    });*/
  });

  describe('fake-anchor', () => {

    it('should match the design spec when an anchor is styled as a button', () => {
      assertCssPropertiesAreEqual(getElementById('btn-anchor'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color', 'rgb(248, 248, 248)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(208, 208, 208)'],
        ['border-right-color', 'rgb(208, 208, 208)'],
        ['border-bottom-color', 'rgb(208, 208, 208)'],
        ['border-left-color', 'rgb(208, 208, 208)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when a focused anchor is styled as a button', () => {
      let el = getElementById('btn-anchor').focus();
      assertCssPropertiesAreEqual(el, [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color', 'rgb(230, 230, 230)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(179, 179, 179)'],
        ['border-right-color', 'rgb(179, 179, 179)'],
        ['border-bottom-color', 'rgb(179, 179, 179)'],
        ['border-left-color', 'rgb(179, 179, 179)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'rgba(0, 0, 0, 0.3)']
      ]);
    });*/
  });

  describe('fake-input', () => {

    it('should match the design spec when an input is styled as a button', () => {
      assertCssPropertiesAreEqual(getElementById('btn-input'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color', 'rgb(248, 248, 248)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(208, 208, 208)'],
        ['border-right-color', 'rgb(208, 208, 208)'],
        ['border-bottom-color', 'rgb(208, 208, 208)'],
        ['border-left-color', 'rgb(208, 208, 208)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'none']
      ]);
    });
/*
    it('should match the design spec when a focused input is styled as a button', () => {
      let el = getElementById('btn-input').focus();
      assertCssPropertiesAreEqual(el, [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(86, 86, 86)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(230, 230, 230)'],

        ['border-top-width', '1px'],
        ['border-right-width', '1px'],
        ['border-bottom-width', '1px'],
        ['border-left-width', '1px'],

        ['border-top-style', 'solid'],
        ['border-right-style', 'solid'],
        ['border-bottom-style', 'solid'],
        ['border-left-style', 'solid'],

        ['border-top-color', 'rgb(179, 179, 179)'],
        ['border-right-color', 'rgb(179, 179, 179)'],
        ['border-bottom-color', 'rgb(179, 179, 179)'],
        ['border-left-color', 'rgb(179, 179, 179)'],

        ['border-top-left-radius', '3px'],
        ['border-top-right-radius', '3px'],
        ['border-bottom-right-radius', '3px'],
        ['border-bottom-left-radius', '3px'],

        ['box-shadow', 'rgba(0, 0, 0, 0.3)']
      ]);
    });*/
  });

  describe('sizes', () => {

    it('should match the design spec when the button is small', () => {
      assertCssPropertiesAreEqual(getElementById('btn-small'), [
        ['height', '24px'],
        ['padding-top', '0px'],
        ['padding-right', '9px'],
        ['padding-bottom', '0px'],
        ['padding-left', '9px'],
        ['font-size', '13px'],
        ['line-height', '24px']
      ]);
    });

    it('should match the design spec when the button is large', () => {
      assertCssPropertiesAreEqual(getElementById('btn-large'), [
        ['height', '42px'],
        ['padding-top', '0px'],
        ['padding-right', '19px'],
        ['padding-bottom', '0px'],
        ['padding-left', '19px'],
        ['font-size', '16px'],
        ['line-height', '42px']
      ]);
    });
  });

  describe('disableds', () => {

    it('should match the design spec when the button is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-disabled'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(166, 168, 171)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(242, 242, 242)'],

        ['border-top-width', '0px'],
        ['border-right-width', '0px'],
        ['border-bottom-width', '0px'],
        ['border-left-width', '0px'],

        ['border-top-style', 'none'],
        ['border-right-style', 'none'],
        ['border-bottom-style', 'none'],
        ['border-left-style', 'none'],

        ['box-shadow', 'none']
      ]);
    });

    it('should match the design spec when the primary button is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-primary-disabled'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(255, 255, 255)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(157, 192, 219)'],
        ['border-width', ''],
        ['border-color', ''],
        ['box-shadow', 'none']
      ]);
    });

    it('should match the design spec when the link button is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-link-disabled'), [
        ['padding', ''],
        ['color', 'rgb(157, 192, 219)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color', 'rgba(0, 0, 0, 0)'],
        ['border-width', ''],
        ['box-shadow', 'none']
      ]);
    });
  });

  describe('fake-disableds', () => {

    it('should match the design spec when fake-button div is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-div-disabled'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(166, 168, 171)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(242, 242, 242)'],
        ['border-width', ''],
        ['border-color', ''],
        ['box-shadow', 'none']
      ]);
    });

    it('should match the design spec when fake-button anchor is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-anchor-disabled'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(166, 168, 171)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['text-decoration', 'none'],
        ['background-color', 'rgb(242, 242, 242)'],
        ['border-width', ''],
        ['border-color', ''],
        ['box-shadow', 'none']
      ]);
    });
    
    it('should match the design spec when fake-button input is disabled', () => {
      assertCssPropertiesAreEqual(getElementById('btn-input-disabled'), [
        ['height', '28px'],
        ['padding-top', '0px'],
        ['padding-right', '11px'],
        ['padding-bottom', '0px'],
        ['padding-left', '11px'],
        ['color', 'rgb(166, 168, 171)'],
        ['font-size', '14px'],
        ['line-height', '28px'],
        ['background-color', 'rgb(242, 242, 242)'],
        ['border-width', ''],
        ['border-color', ''],
        ['box-shadow', 'none']
      ]);
    });
  });
});
