import { Meteor } from 'meteor/meteor'
import Messages from '../collections/Messages'

Meteor.publish('public_messages', function () {
  return Messages.find({})
})
