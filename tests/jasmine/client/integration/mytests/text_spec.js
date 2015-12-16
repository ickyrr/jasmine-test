describe('This sample Jasmine Meteor test', function() {

  //test on window init
  //=======================================================
  describe(' The window of this app', function() {
    it('should contain a title of "Texts"', function() {
      expect($('title').text()).toEqual('Texts');
    });
    it('should contain a head of "Welcome to Meteor!"', function() {
      expect($('h1').text()).toEqual('Welcome to Meteor!');
    });
    it('should contain an undordered list to display text', function() {
      expect($('ul').length).toEqual(1);
    });
  });

  //test for input
  //=======================================================
  describe('the textbox', function() {

    it('should check if empty', function() {
      expect(Inputs.isEmpty('hello')).toBe(false);
    });
    it('should check if textbox only contain alpanumeric characters', function() {
      expect(Inputs.isAlphaNumeric('hello')).toBe(true);
    });
    it('should check if textbox contains only a max of 20 characters', function() {
      expect(Inputs.hasReachedMaximum('thisphrasehastwentycha')).toBe(true);
    });
    it('should have at least 8 characters', function(){
      expect(Inputs.hasMinimum('aaaaaaaa')).toBe(true);
    });
  });

});
