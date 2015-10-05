import Ember from 'ember';

/* global Sanitize */

Sanitize.Config = Sanitize.Config || {};

function sanitizeElement(element, config) {
    if (typeof config === 'string') {
        let name = config;

        config = Sanitize.Config[name];
        Ember.assert(`Sanitizer config '${config}' is not defined!`, config && typeof config === 'object');
    }

    let sanitizer = new Sanitize(config),
        cleaned = document.createElement('div');

    cleaned.appendChild(sanitizer.clean_node(element));

    return cleaned.innerHTML;
}

function sanitize(html, config) {
    let container = document.createElement('div');

    container.innerHTML = html;

    return sanitizeElement(container, config);
}

export {
    sanitize,
    sanitizeElement
};

export default sanitize;
