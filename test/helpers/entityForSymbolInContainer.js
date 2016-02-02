(global => {
  global.entityForSymbolInContainer = (character) => {

    const code = character.replace(/"/g, '').charCodeAt(0);
    let codeHex = code.toString(16);

    while (codeHex.length < 4) {
      codeHex = '0' + codeHex;
    }

    return codeHex ;
  }
})(window);
