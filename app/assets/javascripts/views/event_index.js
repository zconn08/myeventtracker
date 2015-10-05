EventApp.Views.EventIndex = Backbone.View.extend({
  template: JST["event_index"],

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    this.$el.html(this.template({events: this.collection}));
    return this;
  }
});
