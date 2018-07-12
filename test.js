import test from 'ava';
import pbtest1 from '.';

test('pbtest1()', (t) => {
    //adding test comment to trigger ci
    t.notThrows(pbtest1, 'Fix all module errors.');
});
