import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCity(city) {
      if (city) {
        return this.get('store').query('rental', {city});
      }

      return this.get('store').findAll('rental');
    }
  }
});
