import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    console.log('inited with some model? ', this.get('model'));
  },
  actions: {
    changedLocation(e) {
      let val = this.get('timerRef');

      if (val) {
        clearInterval(val);
      }

      val = setTimeout(() => {
        console.log('changed location', e.target.value);
        this.set('model.city', e.target.value);
      }, 500);

      this.set('timerRef', val);
    }
  }
});