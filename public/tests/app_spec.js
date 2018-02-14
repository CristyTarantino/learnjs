describe('LearnJS', function () {
  describe('appOnReady', function () {
    it('should invoke the router when loaded', function () {
      spyOn(learnjs, 'showView');
      learnjs.appOnReady();
      expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });
    it('should subcribe to the hash change event', function () {
      learnjs.appOnReady();
      spyOn(learnjs, 'showView');
      $(window).trigger('hashchange');
      expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });
  });

  describe('showView', function () {
    it('should show a problem view', function () {
      learnjs.showView('#problem-1');
      expect($('.view-container .problem-view').length).toEqual(1);
    });
    // Default case test
    it('should show the landing page view when there is no hash', function () {
      learnjs.showView();
      expect($('.view-container .landing-view').length).toEqual(1);
    });
    it('should pass the hash view parameter to the view function', function () {
      // by using the spy we test the router's interaction with a view without changing the view
      spyOn(learnjs, 'problemView');
      learnjs.showView('#problem-42');
      expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });
  });

  describe('problemView', function () {
    it('should have a title that includes the problem number', function () {
      var view = learnjs.problemView('1');
      expect(view.text()).toEqual('Problem #1 Coming soon!');
    });
  });
});