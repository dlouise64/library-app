import Ember from 'ember';

export default Ember.Controller.extend({


  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  emailDisabled: Ember.computed.not('emailIsValid'),

  msgIsValid: Ember.computed.notEmpty('message'),

  msgDisabled: Ember.computed.not('msgIsValid'),

  emailAddress: '',

  message: '',

  contactFormDisabled: Ember.computed.or('emailDisabled', 'msgDisabled'),

  emailAddressChanged: Ember.observer('emailAddress', function() { 
    console.log('observer is called', this.get('emailAddress')); 
  }),
  
  textMessage: Ember.observer('message', function() { 
    console.log('observer is called', this.get('message')); 
  }),
  
  actions: {

    sendMessage() {
      alert(`Send Message in progress: ${this.get('message')}`);
      this.set('responseMessage', `Thank you! Your message has been sent.`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
