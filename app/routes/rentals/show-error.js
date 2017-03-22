import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, error) {
    console.log('wooot woot -> ', error.message);
    this._super(...arguments);
    this.replaceWith('rentals');
  }
});
