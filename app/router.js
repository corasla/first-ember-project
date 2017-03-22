import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,

    route: function(path) {
      this._super(path);
      var actualPath = this.get("currentState").absoluteRoute(this);
      if (path !== actualPath) {
        this.transitionTo("not-found");
      }
    }
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    this.route('show', {path: '/:rental_id'});
  });
  this.route('not-found', {path: '/*notfound'});
});

export default Router;