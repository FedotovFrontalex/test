import {sum} from './sum';

describe('sum function', () => {
	it('correct sum with arguments', () => {
		const a = 5;
		const b = 1;
		const expected = 6;

		const result = sum(a, b);

		expect(result).toBe(expected);
	})
})
