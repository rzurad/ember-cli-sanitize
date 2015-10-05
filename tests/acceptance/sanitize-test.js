import Ember from 'ember';
import startApp from '../helpers/start-app';
import { module, test } from 'qunit';

let _config = Sanitize.Config;

module('Acceptance: Sanitizing HTML', {
    setup() {
        Sanitize.Config = { 'strict': { elements: ['i'] } };
        this.application = startApp();
    },

    teardown() {
        Ember.run(this.application, 'destroy');
        Sanitize.Config = _config;
    }
});

// {{sanitize-html html}}
test('sanitizes HTML with default sanitizer if no config given', function (assert) {
    visit('/');

    andThen(function () {
        let html = find('#sanitized-default').html();

        assert.ok(html.indexOf('some html here') !== -1, `contains sanitized HTML (${html})`);
    });
});


// {{sanitize-html html "strict"}}
test('resolves configs on Sanitize global via ember resolver', function (assert) {
    visit('/');

    andThen(function () {
        let html = find('#sanitized-with-config').html();

        assert.ok(html.indexOf('some html <i>here</i>') !== -1, `contains sanitized HTML (${html})`);
    });
});
