EventApp.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.eventsCollection = new EventApp.Collections.Events();
  },

  index: function(){
    this.eventsCollection.fetch();
    var view = new EventApp.Views.EventIndex({
      collection: this.eventsCollection,
    });
    this.$rootEl.html(view.$el);
    view.render();
  }
});
