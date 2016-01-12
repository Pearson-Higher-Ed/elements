describe('color', () => {

  let color_path = 'color/',
      json_fixture = window.__json__['test/fixtures/' + color_path + 'colors']; // as configured for jsonFixturesPreprocessor

  function hexToRgb(hex) {
      hex = hex.replace(/[^0-9A-F]/gi, '');
      let bigint = parseInt(hex, 16),
          r = (bigint >> 16) & 255,
          g = (bigint >> 8) & 255,
          b = bigint & 255;

      return 'rgb(' + [r, g, b].join(', ') + ')';
  }

  beforeEach(() => {
    fixture.load(color_path + 'colors.html');
  });

  afterEach(() => {
    fixture.cleanup();
  });

  describe('default', () => {

    it('should render correctly the grayscale colors', () => {

      let pitchRGB = hexToRgb(json_fixture['pitch']),
          grayno1RGB = hexToRgb(json_fixture['gray-no-1']),
          brightlyLitRGB = hexToRgb(json_fixture['brightly-lit']), //WIP
          offWhiteRGB = hexToRgb(json_fixture['off-white']),
          dirtyIceRGB = hexToRgb(json_fixture['dirty-ice']),
          whiteRGB = hexToRgb(json_fixture['white']),
          boringRGB = hexToRgb(json_fixture['boring']),
          sidewalkRGB = hexToRgb(json_fixture['sidewalk']), //WIP
          hairlineGrayRGB = hexToRgb(json_fixture['hairline-gray']),
          grayWashRGB = hexToRgb(json_fixture['gray-wash']),
          blackRGB = hexToRgb(json_fixture['black']),
          gutenbergBlackRGB = hexToRgb(json_fixture['gutenberg-black']),
          fullMoonRGB = hexToRgb(json_fixture['full-moon']),
          asphaltRGB = hexToRgb(json_fixture['asphalt']),
          smokegrayRGB = hexToRgb(json_fixture['smoke-gray']);

      assertCssPropertiesAreEqual(getElementById('pitch'), [
        ['color', pitchRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('grayno1'), [
        ['color', grayno1RGB]
      ]);

      // as yet unable to successfully test 'brightly-lit'
      //console.log(brightlyLitRGB);
      //console.log(getComputedStyle(getElementById('brightlyLit')).getPropertyValue("background-color"));
      //assertCssPropertiesAreEqual(getElementById('brightlyLit'), [
      //  ['background-color', brightlyLitRGB]
      //]);

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

      // as yet unable to successfully test 'sidewalk'
      //console.log(sidewalkRGB);
      //console.log(getComputedStyle(getElementById('sidewalk')).getPropertyValue("border-color"));
      //assertCssPropertiesAreEqual(getElementById('sidewalk'), [
      //  ['border-color', sidewalkRGB]
      //]);

      assertCssPropertiesAreEqual(getElementById('hairlineGray'), [
        ['color', hairlineGrayRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('grayWash'), [
        ['color', grayWashRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('black'), [
        ['color', blackRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('gutenbergBlack'), [
        ['background-color', gutenbergBlackRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('fullMoon'), [
        ['background-color', fullMoonRGB]
      ]);

      // 'asphalt' defined in SASS but not currently used and not tested

      assertCssPropertiesAreEqual(getElementById('smokegray'), [
        ['color', smokegrayRGB]
      ]);

    });

    it('should render correctly the colors', () => {

      let highlighterRGB = hexToRgb(json_fixture['highlighter']),
          royalNavyRGB = hexToRgb(json_fixture['royal-navy']), //WIP
          hyperdriveRGB = hexToRgb(json_fixture['hyperdrive']),
          basicBlueRGB = hexToRgb(json_fixture['basic-blue']),
          seaRGB = hexToRgb(json_fixture['sea']), //WIP
          deepSeaRGB = hexToRgb(json_fixture['deep-sea']), //WIP
          skyBlueRGB = hexToRgb(json_fixture['sky-blue']); //WIP

      assertCssPropertiesAreEqual(getElementById('highlighter'), [
        ['background-color', highlighterRGB]
      ]);

      // color 'royal-navy' requires a hover/active state to be tested
      //console.log(royalNavyRGB);
      //console.log(getComputedStyle(getElementById('disabledButtonLink')).getPropertyValue('color'));
      //assertCssPropertiesAreEqual(getElementById('disabledButtonLink'), [
      //  ['color', royalNavyRGB]
      //]);

      assertCssPropertiesAreEqual(getElementById('hyperdrive'), [
        ['color', hyperdriveRGB]
      ]);

      assertCssPropertiesAreEqual(getElementById('basicBlue'), [
        ['background-color', basicBlueRGB]
      ]);

      // color 'sea' requires a hover/active state to be tested
      //console.log(seaRGB);
      //console.log(getComputedStyle(getElementById('basicBlue')).getPropertyValue('color'));
      //assertCssPropertiesAreEqual(getElementById('basicBlue'), [
      //  ['color', seaRGB]
      //]);

      // as yet unable to successfully test 'deep-sea'
      //console.log(deepSeaRGB);
      //console.log(getComputedStyle(getElementById('basicBlue')).getPropertyValue('border-color'));
      //assertCssPropertiesAreEqual(getElementById('basicBlue'), [
      //  ['border-color', deepSeaRGB]
      //]);

      // as yet unable to successfully test 'sky-blue'
      //console.log(skyBlueRGB);
      //console.log(getComputedStyle(getElementById('disabledButtonLink')).getPropertyValue('color'));
      //assertCssPropertiesAreEqual(getElementById('disabledButtonLink'), [
      //  ['color', skyBlueRGB]
      //]);

    });

  });
});