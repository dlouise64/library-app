import Ember from 'ember';

export default Ember.Controller.extend({

  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  emailDisabled: Ember.computed.not('emailIsValid'),
  msgIsValid: Ember.computed.gte('message.length', 5),
  msgDisabled: Ember.computed.not('msgIsValid'),

  emailAddress: '',
  message: '',

  isValid: Ember.computed.and('emailIsValid', 'msgIsValid'),
  isNotValid: Ember.computed.not('isValid'),
  
  actions: {

    sendMessage() {
      this.set('responseMessage', `Thank you! Your message has been sent.`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
