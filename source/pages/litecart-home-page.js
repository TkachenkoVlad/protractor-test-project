let LitecartHomePage = function () {

};

LitecartHomePage.prototype = Object.create({}, {
  logotype: {get: () => element(by.id('logotype'))}
});

module.exports = LitecartHomePage;
