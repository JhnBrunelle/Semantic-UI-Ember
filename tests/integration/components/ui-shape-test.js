import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-shape', 'Integration | Component | ui shape', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#ui-shape}}
      <p>Content</p>
    {{/ui-shape}}
  `);

  assert.equal(this.$('.ui.shape').length, 1);
});
