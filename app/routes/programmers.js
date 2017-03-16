import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Tudor', 'Alex', 'Bogdan', 'Andrei', 'Mihaela', 'bugabuga'];
    }
});