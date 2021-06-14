import test from 'ava';
import { query_str_ } from '..';
test('query_str_|interface', t => {
    t.deepEqual(query_str_({
        number: 1, string: 'a', boolean: true,
        number_a: [1, 2, 3], string_a: ['a', 'b', 'c'],
        string_or_number_a: ['a', 1],
        string_or_boolean_a: ['a', true],
        number_or_boolean_a: [true, 1],
        string_or_number_or_boolean_a: ['a', true, 1],
    }), '?number=1&string=a&boolean=true&number_a[]=1&number_a[]=2&number_a[]=3&string_a[]=a&string_a[]=b&string_a[]=c&string_or_number_a[]=a&string_or_number_a[]=1&string_or_boolean_a[]=a&string_or_boolean_a[]=true&number_or_boolean_a[]=true&number_or_boolean_a[]=1&string_or_number_or_boolean_a[]=a&string_or_number_or_boolean_a[]=true&string_or_number_or_boolean_a[]=1');
});
test('query_str_|record', t => {
    t.deepEqual(query_str_({
        number: 1, string: 'a', boolean: true,
        number_a: [1, 2, 3], string_a: ['a', 'b', 'c'],
        string_or_number_a: ['a', 1],
        string_or_boolean_a: ['a', true],
        number_or_boolean_a: [true, 1],
        string_or_number_or_boolean_a: ['a', true, 1],
    }), '?number=1&string=a&boolean=true&number_a[]=1&number_a[]=2&number_a[]=3&string_a[]=a&string_a[]=b&string_a[]=c&string_or_number_a[]=a&string_or_number_a[]=1&string_or_boolean_a[]=a&string_or_boolean_a[]=true&number_or_boolean_a[]=true&number_or_boolean_a[]=1&string_or_number_or_boolean_a[]=a&string_or_number_or_boolean_a[]=true&string_or_number_or_boolean_a[]=1');
});
//# sourceMappingURL=../src/test/query_str_.test.js.map