(global => {

  global.hexToRgb = (hex) => {

    hex = hex.replace(/[^0-9A-F]/gi, '');

    let bigint = parseInt(hex, 16),
        r = (bigint >> 16) & 255,
        g = (bigint >> 8) & 255,
        b = bigint & 255;

    return 'rgb(' + [r, g, b].join(', ') + ')';
  };

})(window);