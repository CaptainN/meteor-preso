import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import Messages from '/imports/api/collections/Messages'

Meteor.methods({
  async addMessage (msg) {
    check(msg, String)

    const userId = Meteor.userId()
    if (!userId) {
      throw new Meteor.Error('add-message-not-authenticated', 'You must be logged in to add a message.')
    }

    try {
      var msgId = await Messages.insert({owner: userId, text: msg})
    } catch (error) {
      throw new Meteor.Error('add-message-failed', error.text)
    }
    return msgId
  }
})
