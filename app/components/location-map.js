import Ember from 'ember';

export default Ember.Component.extend({
  maps: Ember.inject.service(),

  updateLocation() {
    this._super(...arguments);
    let location = this.get('location');
    let mapElement = this.get('maps').getMapElement(location, this.get('bigMap') ? 'large' : 'small');
    mapElement.style.position = 'absolute';
    this.$('.map-container').append(mapElement);
    this.$('.big-map-container').append(mapElement);
  },  

  // initial render
  init() {
    console.log('LocationMap -> init');
    this._super(...arguments);
  },

  didReceiveAttrs() {
    console.log('LocationMap -> didReceiveAttrs');
  },

  willRender() {
    console.log('LocationMap -> willRender');
  },

  didInsertElement() {
    console.log('LocationMap -> didInsertElement');
    console.log('comp -> ', this.$());
    this.updateLocation();
  },

  didRender() {
    console.log('LocationMap -> didRender');
  },

  // re-render
  didUpdateAttrs() {
    if (!this.get('location').trim()) {
      return;
    }

    console.log('LocationMap -> didUpdateAttrs');
    this.updateLocation();
  },

  willUpdate() {
    console.log('LocationMap -> willUpdate');
  },

  didUpdate() {
    console.log('LocationMap -> didUpdate');
  },

  // destroy
  willDestroyElement() {
    console.log('LocationMap -> willDestroyElement');
  },

  
  willClearRender() {
    console.log('LocationMap -> willClearRender');
  },

  didDestroyElement() {
    console.log('LocationMap -> didDestroyElement');
  }


});
