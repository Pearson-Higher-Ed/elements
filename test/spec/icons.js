describe('icons',() => {
	afterEach(()=>{
		fixture.cleanup();
	});

	describe('pe-icon--',() =>{

		beforeEach(() => {
		fixture.load('icons/icons.html');
		});

		it('should match the design spec where it is pe-icon--',()=>{
			assertCssPropertiesAreEqual(getElementById('peIcon'),[
			['font-family','pearson-fa'],
			['speak','none'],
			['font-style','normal'],
			['font-weight','normal'],
			['font-variant','normal'],
			['text-transform','none'],
			['line-height','16px'],
			['-webkit-font-smoothing','antialiased'],		
			]);
		});
	});
	
	describe('icons',() =>{

		beforeEach(() => {
		fixture.load('icons/icons.html');
		});

		it('should match the design spec where it is check',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--check'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f00c");
		});	

		it('should match the design spec where it is chevron-down',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--chevron-down'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f078");
		});

		it('should match the design spec where it is chevron-up',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--chevron-up'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f077");
		});

		it('should match the design spec where it is cog',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--cog'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f013");
		});

		it('should match the design spec where it is envelope',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--envelope'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f0e0");
		});

		it('should match the design spec where it is plus-circle',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--plus-circle'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f055");
		});

		it('should match the design spec where it is search',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--search'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f002");
		});

		it('should match the design spec where it is thumb-tack',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--thumb-tack'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f08d");
		});

		it('should match the design spec where it is times',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--times'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f00d");
		});

		it('should match the design spec where it is times-circle',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--times-circle'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f057");
		});

		it('should match the design spec where it is trash-o',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--trash-o'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f014");
		});

		it('should match the design spec where it is users',()=>{
			var character = window.getComputedStyle(document.querySelector('.pe-icon--users'),':before').getPropertyValue('content');
			var content=`\\`+entityForSymbolInContainer(character);
			expect(content).to.equal("\\f0c0");
		});

	});

});
