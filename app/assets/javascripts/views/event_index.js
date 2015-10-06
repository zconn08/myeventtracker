EventApp.Views.EventIndex = Backbone.View.extend({
  template: JST["event_index"],

  events: {
    "click .btn-success": "addEvent",
    "click .glyphicon-remove": "deleteEvent",
    "click .btn-danger": "cancelEvent"
  },

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "change", this.render);
  },

  render: function(){
    this.$el.html(this.template({events: this.collection}));
    this.$('.cards').sortable({
      stop: function(event, ui){
        this.saveOrder();
      }.bind(this)
    });
    return this;
  },

  addEvent: function(e){
    e.preventDefault();
    $(".errors").css("background-color", "none");
    $(".errors").css("margin-bottom", "0");

    var formData = this.$("form").serializeJSON();
    var dateInfo = formData.events.date.split("-");

    formData.events.year = dateInfo[0];
    formData.events.month = dateInfo[1];
    formData.events.day = dateInfo[2];
    formData.events.cancelled = "false";
    formData.events.ord = this.collection.length + 1;

    delete formData.events["date"];
    var newEvent = new EventApp.Models.Event();

    newEvent.save(formData, {
      success: function(model){
        this.collection.add(newEvent);
        this.collection.fetch();
      }.bind(this),
      error: function(data, b, c){
        $(".errors").html("Please try again...");
        $(".errors").css("background-color", "#FF7A5A");
        $(".errors").css("margin-bottom", "5px");
      }.bind(this)
    });
  },

  deleteEvent: function(e){
    var eventId = $(e.currentTarget).data("event-id")
    var model = this.collection.get(eventId);
    model.destroy();
    this.collection.remove(model);
    this.collection.fetch();
  },

  cancelEvent: function(e){
    e.preventDefault();
    var eventId = $(e.currentTarget).data("event-id")
    var model = this.collection.get(eventId);
    model.save({events: { cancelled:true}});
    this.collection.fetch();
  },

  saveOrder: function(){
    var cards = this.$('.event-card');

    for(var i = 0; i < cards.length; i++) {
      var cardId = $(cards[i]).data("event-id");
      var currentEvent = this.collection.get(cardId);
      currentEvent.set({"ord" : i});
      currentEvent.save({"events" : {"ord" : i}});
    }
    this.collection.sort();
    this.render();
  },

});
