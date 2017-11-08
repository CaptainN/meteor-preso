import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  players () {
    import Players from '/imports/api/collections/Players'
    return Players.find({}).fetch().map(player => player.name).join(', ')
  },
  messages () {
    import { Meteor } from 'meteor/meteor'
    Meteor.subscribe('public_messages')
    import Messages from '/imports/api/collections/Messages'
    return Messages.find({})
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
