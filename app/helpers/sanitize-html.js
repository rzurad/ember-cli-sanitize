import { sanitize } from 'ember-cli-sanitize/utils/sanitize';
import Ember from 'ember';

export default Ember.Helper.helper(function (params, hash) {
    return Ember.String.htmlSafe(sanitize(params[0], params[1]));
});
