import { Meteor } from 'meteor/meteor'
import Messages from '/imports/api/collections/Messages'

Meteor.methods({
  addMessage (msg) {
    try {
      var msgId = Messages.insert({text: msg})
    } catch (error) {
      throw new Meteor.Error('add-message-failed', error.text)
    }
    return msgId
  }
})
