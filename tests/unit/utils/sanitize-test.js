import { module, test } from 'qunit';
import { sanitize } from 'ember-cli-sanitize/utils/sanitize';

let _config = Sanitize.Config;

module('Utils | SanitizeHelper', {
    setup() {
        Sanitize.Config = { strict: { elements: ['i'] } };
    },

    teardown() {
        Sanitize.Config = _config;
    }
});

test('sanitizes with the defaults', function (assert) {
    assert.equal(sanitize('some <b>html</b> here'), 'some html here');
});

test('sanitizes with a config name', function (assert) {
    assert.equal(sanitize('some <b>html</b> <i>here</i>', 'strict'), 'some html <i>here</i>');
});

test('sanitizes with a custom config object', function (assert) {
    assert.equal(sanitize('some <b>html</b> <i>here</i>', { elements: ['i'] }), 'some html <i>here</i>');
});
