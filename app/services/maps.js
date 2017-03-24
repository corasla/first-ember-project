import Ember from 'ember';
import MapUtil from '../utils/google-maps';

export default Ember.Service.extend({
  init() {
    if (!this.get('cachedMaps')) {
      this.set('cachedMaps', Ember.Object.create());
    }

    if (!this.get('mapUtil')) {
      this.set('mapUtil', MapUtil.create());
    }
  },

  getMapElement(location, size) {
    if (!size) {
      size = '';
    }
    let key = location.camelize() + size;
    let element = this.get(`cachedMaps.${key}`);

    if (!element) {
      element = this.createMapElement();
      this.get('mapUtil').createMap(element, location);
      this.set(`cachedMaps.${key}`, element);
    }
    
    element.classname = 'map';
    return element;
  },

  createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    
    return element;
  }
});
