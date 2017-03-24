import Ember from 'ember';

export default Ember.Controller.extend({
  someArr: [],
  init: function() {
    // if (this.get('interval')) {
    //   return;
    // }

    // let interval = setInterval(() => {
    //   this.someArr.pushObject('omg ' + Math.random());
    // }, 1000);

    // this.set('interval', interval);
  },
  actions: {
    filterByCity(city) {
      if (city) {
        return this.get('store').query('rental', {city});
      }

      return this.get('store').findAll('rental');
    },
    changedLocation(e) {
      console.log('changed location', e.value);
    }
  }
});