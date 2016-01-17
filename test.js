import test from 'ava'
import hashSearch from './'

global.location = {
	hash: ''
}

test('main', t => {
	t.same(hashSearch('#/a/b/c'), {
		hash: '#/a/b/c',
		search: ''
	})
	t.same(hashSearch('#/a/b/c?a=12&d=3'), {
		hash: '#/a/b/c',
		search: '?a=12&d=3'
	})
	t.same(hashSearch(''), {
		hash: '',
		search: ''
	})
	t.same(hashSearch('#/a/b/c?'), {
		hash: '#/a/b/c',
		search: '?'
	})
})
