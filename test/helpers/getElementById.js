/* global fixture */
(global => {

  global.getElementById = (id) => {
    if (!fixture || !fixture.el) {
      throw new Error('fixture.el must be an element.');
    }

    return fixture.el.querySelector(`#${id}`);
  };

})(window);
