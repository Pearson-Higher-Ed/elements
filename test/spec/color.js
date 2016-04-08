/* global fixture hexToRgb assertCssPropertiesAreEqual getElementById */
describe('color', () => {

  const color_path = 'color/';
  // following is configured in karma.conf.js for jsonFixturesPreprocessor
  const json_fixture = window.__json__['test/fixtures/' + color_path + 'colors'];

  beforeEach(() => {
    fixture.load(color_path + 'colors.html');
  });

  afterEach(() => {
    fixture.cleanup();
  });

  describe('color sets', () => {

    it('should render correctly the grayscale colors', () => {

      const pitchRGB = hexToRgb(json_fixture['pitch']);
      const grayno1RGB = hexToRgb(json_fixture['gray-no-1']);
      const brightlyLitRGB = hexToRgb(json_fixture['brightly-lit']);
      const offWhiteRGB = hexToRgb(json_fixture['off-white']);
      const dirtyIceRGB = hexToRgb(json_fixture['dirty-ice']);
      const whiteRGB = hexToRgb(json_fixture['white']);
      const boringRGB = hexToRgb(json_fixture['boring']);
      const sidewalkRGB = hexToRgb(json_fixture['sidewalk']);
      const hairlineGrayRGB = hexToRgb(json_fixture['hairline-gray']);
      const grayWashRGB = hexToRgb(json_fixture['gray-wash']);
      const blackRGB = hexToRgb(json_fixture['black']);
      const fullMoonRGB = hexToRgb(json_fixture['full-moon']);
      const asphaltRGB = hexToRgb(json_fixture['asphalt']);

      assertCssPropertiesAreEqual(getElementById('pitch'), [
        ['color', pitchRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('grayno1'), [
        ['color', grayno1RGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('brightlyLit'), [
        ['background-color', brightlyLitRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('disabledButton'), [
        ['background-color', offWhiteRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('dirtyIce'), [
        ['background-color', dirtyIceRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('white'), [
        ['color', whiteRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('disabledButton'), [
        ['color', boringRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('sidewalk'), [
        ['border-top-color', sidewalkRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('hairlineGray'), [
        ['color', hairlineGrayRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('grayWash'), [
        ['color', grayWashRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('black'), [
        ['color', blackRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('fullMoon'), [
        ['background-color', fullMoonRGB]
      ]);

    });

    it('should render correctly the colors', () => {

      const highlighterRGB = hexToRgb(json_fixture['highlighter']);
      const royalNavyRGB = hexToRgb(json_fixture['royal-navy']); // WIP
      const hyperdriveRGB = hexToRgb(json_fixture['hyperdrive']);
      const basicBlueRGB = hexToRgb(json_fixture['basic-blue']);
      const seaRGB = hexToRgb(json_fixture['sea']); // WIP
      const deepSeaRGB = hexToRgb(json_fixture['deep-sea']);
      const skyBlueRGB = hexToRgb(json_fixture['sky-blue']);

      assertCssPropertiesAreEqual(getElementById('highlighter'), [
        ['background-color', highlighterRGB]
      ]);

      // color 'royal-navy' requires a hover/active state to be tested
/*
      console.log(royalNavyRGB);
      console.log(getComputedStyle(getElementById('disabledButtonLink')).getPropertyValue('color'));
      assertCssPropertiesAreEqual(getElementById('disabledButtonLink'), [
        ['color', royalNavyRGB]
      ]);
*/

      assertCssPropertiesAreEqual(getElementById('hyperdrive'), [
        ['color', hyperdriveRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('basicBlue'), [
        ['background-color', basicBlueRGB]
      ]);

      // color 'sea' requires a hover/active state to be tested
/*
      console.log(seaRGB);
      console.log(getComputedStyle(getElementById('basicBlue')).getPropertyValue('color'));
      assertCssPropertiesAreEqual(getElementById('basicBlue'), [
        ['color', seaRGB]
      ]);

*/
      assertCssPropertiesAreEqual(getElementById('basicBlue'), [
        ['border-top-color', deepSeaRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('disabledButtonLink'), [
        ['color', skyBlueRGB]
      ]);

    });

  });
});
