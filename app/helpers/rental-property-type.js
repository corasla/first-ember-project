import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]) {
  return communityPropertyTypes.includes(type) ? 'Community' : 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
