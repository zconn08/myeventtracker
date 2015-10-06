EventApp.Collections.Events = Backbone.Collection.extend({
  url: "/events",
  comparator: function (event) {
    return event.get('ord');
  }
});
