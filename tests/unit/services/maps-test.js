import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

const DUMMY_ELEMENT = {};
let MapUtilsStub = Ember.Object.extend({
  createMap(element, location) {
    this.assert.ok(element, 'createMap called with element');
    this.assert.ok(location, 'createMap called with location');
    return DUMMY_ELEMENT;
  }
});

moduleFor('service:maps', 'Unit | Service | maps', {
  // Specify the other units that are required for this test.
});

test('should create a new map if one isnt cached for location', function(assert) {
 assert.expect(4); 
 let stubMapUtil = MapUtilsStub.create({ assert });
 let mapService = this.subject({ mapUtil: stubMapUtil });
 let element = mapService.getMapElement('San Francisco');
 assert.ok(element, 'element exists');
 assert.equal(element.className, 'map', 'element has class name of map');
});

test('should use existing map if one is cached for location', function(assert) {
  assert.expect(1);
  let stubCachedMaps = Ember.Object.create({
    sanFrancisco: DUMMY_ELEMENT,
  });
  let stubMapUtil = MapUtilsStub.create({ assert });
  let mapService = this.subject({ cachedMaps: stubCachedMaps, mapUtil: stubMapUtil });
  let element = mapService.getMapElement('San Francisco');
  assert.equal(element, DUMMY_ELEMENT, 'element fetched from cache');
});
