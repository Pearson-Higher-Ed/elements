(global => {
	global.entityForSymbolInContainer = (character) => {
		
		var code = character.replace(/"/g, '').charCodeAt(0);
        var codeHex = code.toString(16);
        
        while (codeHex.length < 4) {
            codeHex = "0" + codeHex;
        }

        return codeHex ;
	}
})(window);
