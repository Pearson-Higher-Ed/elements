/* global fixture hexToRgb assertCssPropertiesAreEqual entityForSymbolInContainer getElementById expect */
describe('icons', () => {

  let character;
  let content;
  const formatContent = (character) => {
    return `\\` + entityForSymbolInContainer(character);
  };

  afterEach(() => {
    fixture.cleanup();
  });

  describe('pe-icon--', () =>{

    beforeEach(() => {
      fixture.load('icons/icons.html');
    });

    it('should match the design spec where it is pe-icon--', () => {
      assertCssPropertiesAreEqual(getElementById('peIcon'), [
				['font-family', 'pearson-fa'],
				['font-style', 'normal'],
				['font-weight', 'normal'],
				['font-variant', 'normal'],
				['text-transform', 'none'],
				['line-height', '16px'],
				['-webkit-font-smoothing', 'antialiased']
      ]);
    });
  });

  describe('icons', () => {

    beforeEach(() => {
      fixture.load('icons/icons.html');
    });

    it('should match the design spec where it is check', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--check'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f00c');
    });

    it('should match the design spec where it is chevron-down', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--chevron-down'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f078');
    });

    it('should match the design spec where it is chevron-up', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--chevron-up'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f077');
    });

    it('should match the design spec where it is chevron-left', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--chevron-left'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f056');
    });

    it('should match the design spec where it is chevron-right', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--chevron-right'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f058');
    });

    it('should match the design spec where it is cog', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--cog'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f013');
    });

    it('should match the design spec where it is envelope', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--envelope'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f0e0');
    });

    it('should match the design spec where it is plus-circle', ()=>{
      character = window.getComputedStyle(document.querySelector('.pe-icon--plus-circle'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f055');
    });

    it('should match the design spec where it is search', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--search'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f002');
    });

    it('should match the design spec where it is thumb-tack', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--thumb-tack'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f08d');
    });

    it('should match the design spec where it is times', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--times'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f00d');
    });

    it('should match the design spec where it is times-circle', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--times-circle'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f057');
    });

    it('should match the design spec where it is trash-o', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--trash-o'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f014');
    });

    it('should match the design spec where it is users', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--users'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f0c0');
    });

    it('should match the design spec where it is info-circle', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--info-circle'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f05a');
    });

    it('should match the design spec where it is user', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--user'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f007');
    });

    it('should match the design spec where it is file-o', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--file-o'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f016');
    });

    it('should match the design spec where it is calendar', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--calendar'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f073');
    });

    it('should match the design spec where it is square-o', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--square-o'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f096');
    });

    it('should match the design spec where it is check-square-o', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--check-square-o'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f046');
    });

    it('should match the design spec where it is ban', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--ban'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f05e');
    });

    it('should match the design spec where it is camera', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--camera'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f030');
    });

    it('should match the design spec where it is clock-o', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--clock-o'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f017');
    });

    it('should match the design spec where it is exclamation-circle', () => {
      character = window.getComputedStyle(document.querySelector('.pe-icon--exclamation-circle'), ':before').getPropertyValue('content');
      content = formatContent(character);
      expect(content).to.equal('\\f06a');
    });

  });

});
