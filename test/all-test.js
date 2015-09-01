var test = require('tape');

var flipit = require('../index');

test('sanity check', function(t){
    t.plan(1);
    t.ok(flipit);
});
