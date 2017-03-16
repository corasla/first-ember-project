import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('people-list', 'Integration | Component | people list', {
    integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs `{{people-list}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.set("data", ['eu', 'tu', 'si inca cineva']);
    this.render(hbs `
    {{#people-list title='My title' people=data}}
    {{/people-list}}
  `);

    assert.equal(this.$().text().trim().split('\n').join('').replace(/\s+/g, ' '), 'My title eu tu si inca cineva');
});