window.EventApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new EventApp.Routers.Router({
      $rootEl: $("#main-content")
    });
    Backbone.history.start();
  }
};
