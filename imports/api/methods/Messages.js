import { Meteor } from 'meteor/meteor'
import Messages from '/imports/api/collections/Messages'

Meteor.methods({
  addMessage (msg) {
    return Messages.insert({text: msg})
  }
})
