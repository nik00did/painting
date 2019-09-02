describe('model.js', () => {
    describe('startAdd', () => {
        const testData = [
            {
                array: [],
                id: 1,
                firstName: 'a',
                lastName: 'a',
                age: 1,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1}
                ]
            },
            {
                array:[
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 1,
                firstName: 'a',
                lastName: 'a',
                age: 1,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 2,
                firstName: 'c',
                lastName: 'c',
                age: 10000,
                expected: [
                    {id:2, firstName: 'c', lastName: 'c', age: 10000},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 20000203,
                firstName: 'Nikita',
                lastName: 'Didenko',
                age: 19,
                expected: [
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array:[
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 102938475,
                firstName: 'Nikita',
                lastName: 'Chudakov',
                age: 25,
                expected: [
                    {id:102938475, firstName: 'Nikita', lastName: 'Chudakov', age: 25},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            }
        ];

        testData.forEach(data => {
            const { array, id, firstName, lastName, age, expected } = data;

            const table = new Table();

            for (let i = 0; i < array.length; i++) {
                const { id, firstName, lastName, age } = array[i];
                table.endAdd(id, firstName, lastName, age);
            }

            table.startAdd(id, firstName, lastName, age);

            const actual = table.getArray();

            it(`Test okay, when id = ${id}, first name = ${firstName}, last name = ${lastName} and age = ${age}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('endAdd', () => {
        const testData = [
            {
                array: [],
                id: 1,
                firstName: 'a',
                lastName: 'a',
                age: 1,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1}
                ]
            },
            {
                array:[
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 1,
                firstName: 'a',
                lastName: 'a',
                age: 1,
                expected: [
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1}
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 2,
                firstName: 'c',
                lastName: 'c',
                age: 10000,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:2, firstName: 'c', lastName: 'c', age: 10000}
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 20000203,
                firstName: 'Nikita',
                lastName: 'Didenko',
                age: 19,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19}
                ]
            },
            {
                array:[
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 102938475,
                firstName: 'Nikita',
                lastName: 'Chudakov',
                age: 25,
                expected: [
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:102938475, firstName: 'Nikita', lastName: 'Chudakov', age: 25}
                ]
            }
        ];

        testData.forEach(data => {
            const { array, id, firstName, lastName, age, expected } = data;

            const table = new Table();

            for (let i = 0; i < array.length; i++) {
                const { id, firstName, lastName, age } = array[i];
                table.endAdd(id, firstName, lastName, age);
            }

            table.endAdd(id, firstName, lastName, age);

            const actual = table.getArray();

            it(`Test okay, when id = ${id}, first name = ${firstName}, last name = ${lastName} and age = ${age}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('underIndexAdd', () => {
        const testData = [
            {
                array: [],
                id: 1,
                firstName: 'a',
                lastName: 'a',
                age: 1,
                index: 0,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1}
                ]
            },
            {
                array:[
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 1,
                firstName: 'a',
                lastName: 'a',
                age: 1,
                index: 0,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 2,
                firstName: 'c',
                lastName: 'c',
                age: 10000,
                index: 0,
                expected: [
                    {id:2, firstName: 'c', lastName: 'c', age: 10000},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 2,
                firstName: 'c',
                lastName: 'c',
                age: 10000,
                index: 1,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:2, firstName: 'c', lastName: 'c', age: 10000},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 2,
                firstName: 'c',
                lastName: 'c',
                age: 10000,
                index: 2,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:2, firstName: 'c', lastName: 'c', age: 10000}
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 20000203,
                firstName: 'Nikita',
                lastName: 'Didenko',
                age: 19,
                index: 4,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 20000203,
                firstName: 'Nikita',
                lastName: 'Didenko',
                age: 19,
                index: 0,
                expected: [
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 20000203,
                firstName: 'Nikita',
                lastName: 'Didenko',
                age: 19,
                index: 5,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array:[
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 102938475,
                firstName: 'Nikita',
                lastName: 'Chudakov',
                age: 25,
                index: 3,
                expected: [
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:102938475, firstName: 'Nikita', lastName: 'Chudakov', age: 25},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array:[
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                id: 102938475,
                firstName: 'Nikita',
                lastName: 'Chudakov',
                age: 25,
                index: 7,
                expected: [
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:102938475, firstName: 'Nikita', lastName: 'Chudakov', age: 25}
                ]
            }
        ];

        testData.forEach(data => {
            const { array, id, firstName, lastName, age, index, expected } = data;

            const table = new Table();

            for (let i = 0; i < array.length; i++) {
                const { id, firstName, lastName, age } = array[i];
                table.endAdd(id, firstName, lastName, age);
            }

            table.underIndexAdd(id, firstName, lastName, age, index);

            const actual = table.getArray();

            it(`Test okay, when id = ${id}, first name = ${firstName}, last name = ${lastName}, age = ${age} and index = ${index}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('deleteRecord', () => {
        const testData = [
            {
                array: [
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                index: 0,
                expected: []
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                index: 0,
                expected: [
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                index: 1,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1}
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:2, firstName: 'c', lastName: 'c', age: 10000},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                index: 1,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:2, firstName: 'c', lastName: 'c', age: 10000}
                ],
                index: 2,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ],
                index: 4,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ]
            },
            {
                array:[
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ],
                index: 0,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ]
            },
            {
                array:[
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                index: 5,
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array:[
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:102938475, firstName: 'Nikita', lastName: 'Chudakov', age: 25},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                index: 3,
                expected: [
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array:[
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:102938475, firstName: 'Nikita', lastName: 'Chudakov', age: 25}
                ],
                index: 7,
                expected: [
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            }
        ];

        testData.forEach(data => {
            const { array, index, expected } = data;

            const table = new Table();

            for (let i = 0; i < array.length; i++) {
                const { id, firstName, lastName, age } = array[i];
                table.endAdd(id, firstName, lastName, age);
            }

            table.deleteRecord(index);

            const actual = table.getArray();

            it(`Test okay, when index = ${index}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getArray', () => {
        const testData = [
            {
                array: [],
                expected: []
            },
            {
                array: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1}
                ],
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1}
                ]
            },
            {
                array: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ]
            },
            {
                array: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ],
                expected: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ]
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const table = new Table();

            for (let i = 0; i < array.length; i++) {
                const { id, firstName, lastName, age } = array[i];
                table.endAdd(id, firstName, lastName, age);
            }

            const actual = table.getArray();

            it(`Test okay`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSize', () => {
        const testData = [
            {
                array: [],
                expected: 0
            },
            {
                array: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1}
                ],
                expected: 1
            },
            {
                array: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                expected: 2
            },
            {
                array: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0}
                ],
                expected: 5
            },
            {
                array: [
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                    {id:20000203, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1, firstName: 'a', lastName: 'a', age: 1},
                    {id:0, firstName: 'b', lastName: 'b', age: 0},
                ],
                expected: 7
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const table = new Table();

            for (let i = 0; i < array.length; i++) {
                const { id, firstName, lastName, age } = array[i];
                table.endAdd(id, firstName, lastName, age);
            }

            const actual = table.getSize();

            it(`Test okay`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });
});

describe('index.js', () => {
    describe('convertToCSV', () => {
        const testData = [
            {
                array: [],
                expected: ''
            },
            {
                array: [
                    {id: 1567105293869, firstName: 'Nikita', lastName: 'Didenko', age: 19}
                ],
                expected: 'id,firstName,lastName,age\n' +
                        '1567105293869,Nikita,Didenko,19\n'
            },
            {
                array: [
                    {id: 1, firstName: 'a', lastName: 'a', age: 1},
                    {id: 2, firstName: 'b', lastName: 'b', age: 2}
                ],
                expected: 'id,firstName,lastName,age\n' +
                            '1,a,a,1\n' +
                            '2,b,b,2\n'
            },
            {
                array: [
                    {id: 1, firstName: 'a', lastName: 'a', age: 1},
                    {id: 2, firstName: 'b', lastName: 'b', age: 2},
                    {id: 3, firstName: 'c', lastName: 'c', age: 3},
                    {id: 4, firstName: 'd', lastName: 'd', age: 4},
                    {id: 5, firstName: 'e', lastName: 'e', age: 5}
                ],
                expected: 'id,firstName,lastName,age\n' +
                            '1,a,a,1\n' +
                            '2,b,b,2\n' +
                            '3,c,c,3\n' +
                            '4,d,d,4\n' +
                            '5,e,e,5\n'
            },
            {
                array: [
                    {id: 1, firstName: 'a', lastName: 'a', age: 1},
                    {id: 2, firstName: 'b', lastName: 'b', age: 2},
                    {id: 3, firstName: 'c', lastName: 'c', age: 3},
                    {id: 4, firstName: 'd', lastName: 'd', age: 4},
                    {id: 5, firstName: 'e', lastName: 'e', age: 5},
                    {id: 6, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id: 7, firstName: 'Naumova', lastName: 'Oksana', age: 18},
                    {id: 8, firstName: 'Nikita', lastName: 'Chudakov', age: 25}
                ],
                expected: 'id,firstName,lastName,age\n' +
                            '1,a,a,1\n' +
                            '2,b,b,2\n' +
                            '3,c,c,3\n' +
                            '4,d,d,4\n' +
                            '5,e,e,5\n' +
                            '6,Nikita,Didenko,19\n' +
                            '7,Naumova,Oksana,18\n' +
                            '8,Nikita,Chudakov,25\n'
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const actual = convertToCSV(array);

            it(`Test okay`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('convertToYaml', () => {
        const testData = [
            {
                array: [],
                expected: ''
            },
            {
                array: [
                    {id:1567098389203, firstName: 'Nikita', lastName: 'Didenko', age: 19}
                ],
                expected: '-\n' +
                    '  id: 1567098389203\n' +
                    '  firstName: Nikita\n' +
                    '  lastName: Didenko\n' +
                    '  age: 19\n'
            },
            {
                array: [
                    {id:1567098499764, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098502929, firstName: 'b', lastName: 'b', age: 0}
                ],
                expected: '-\n' +
                    '  id: 1567098499764\n' +
                    '  firstName: a\n' +
                    '  lastName: a\n' +
                    '  age: 1\n' +
                    '-\n' +
                    '  id: 1567098502929\n' +
                    '  firstName: b\n' +
                    '  lastName: b\n' +
                    '  age: 0\n'
            },
            {
                array: [
                    {id:1567098499764, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098502929, firstName: 'b', lastName: 'b', age: 0},
                    {id:1567098636042, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098653790, firstName: 'b', lastName: 'b', age: 0},
                    {id:1567098668245, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                ],
                expected: '-\n' +
                    '  id: 1567098499764\n' +
                    '  firstName: a\n' +
                    '  lastName: a\n' +
                    '  age: 1\n' +
                    '-\n' +
                    '  id: 1567098502929\n' +
                    '  firstName: b\n' +
                    '  lastName: b\n' +
                    '  age: 0\n' +
                    '-\n' +
                    '  id: 1567098636042\n' +
                    '  firstName: a\n' +
                    '  lastName: a\n' +
                    '  age: 1\n' +
                    '-\n' +
                    '  id: 1567098653790\n' +
                    '  firstName: b\n' +
                    '  lastName: b\n' +
                    '  age: 0\n' +
                    '-\n' +
                    '  id: 1567098668245\n' +
                    '  firstName: Nikita\n' +
                    '  lastName: Didenko\n' +
                    '  age: 19\n'
            },
            {
                array: [
                    {id:1567098499764, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098502929, firstName: 'b', lastName: 'b', age: 0},
                    {id:1567098636042, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098653790, firstName: 'b', lastName: 'b', age: 0},
                    {id:1567098668245, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1567098816592, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098821848, firstName: 'b', lastName: 'b', age: 0},
                ],
                expected: '-\n' +
                    '  id: 1567098499764\n' +
                    '  firstName: a\n' +
                    '  lastName: a\n' +
                    '  age: 1\n' +
                    '-\n' +
                    '  id: 1567098502929\n' +
                    '  firstName: b\n' +
                    '  lastName: b\n' +
                    '  age: 0\n' +
                    '-\n' +
                    '  id: 1567098636042\n' +
                    '  firstName: a\n' +
                    '  lastName: a\n' +
                    '  age: 1\n' +
                    '-\n' +
                    '  id: 1567098653790\n' +
                    '  firstName: b\n' +
                    '  lastName: b\n' +
                    '  age: 0\n' +
                    '-\n' +
                    '  id: 1567098668245\n' +
                    '  firstName: Nikita\n' +
                    '  lastName: Didenko\n' +
                    '  age: 19\n' +
                    '-\n' +
                    '  id: 1567098816592\n' +
                    '  firstName: a\n' +
                    '  lastName: a\n' +
                    '  age: 1\n' +
                    '-\n' +
                    '  id: 1567098821848\n' +
                    '  firstName: b\n' +
                    '  lastName: b\n' +
                    '  age: 0\n'
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const actual = convertToYaml(array);

            it(`Test okay`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('convertObjectToXML', () => {
        const testData = [
            {
                object: {id: 1, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                expected: '<id>1</id><firstName>Nikita</firstName><lastName>Didenko</lastName><age>19</age>'
            },
            {
                object: {id: 1, firstName: 'Oksana', lastName: 'Naumova', age: 18},
                expected: '<id>1</id><firstName>Oksana</firstName><lastName>Naumova</lastName><age>18</age>'
            },
            {
                object: {id: 1, firstName: 'Nikita', lastName: 'Chudakov', age: 25},
                expected: '<id>1</id><firstName>Nikita</firstName><lastName>Chudakov</lastName><age>25</age>'
            },
            {
                object: {id: 1, firstName: 'a', lastName: 'a', age: 1},
                expected: '<id>1</id><firstName>a</firstName><lastName>a</lastName><age>1</age>'
            },
            {
                object: null,
                expected: ''
            }
        ];

        testData.forEach(data => {
            const { object, expected } = data;

            const actual = convertObjectToXML(object);

            it(`Test okay`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('convertToXML', () => {
        const testData = [
            {
                array: [],
                expected: '<root></root>'
            },
            {
                array: [
                    {id: 1567103469276, firstName: 'Nikita', lastName: 'Didenko', age: 19}
                ],
                expected: '<root><id>1567103469276</id><firstName>Nikita</firstName><lastName>Didenko</lastName><age>19</age></root>'
            },
            {
                array: [
                    {id: 1, firstName: 'a', lastName: 'a', age: 1},
                    {id: 2, firstName: 'b', lastName: 'b', age: 2}
                ],
                expected: '<root><id>1</id><firstName>a</firstName><lastName>a</lastName><age>1</age><id>2</id><firstName>b</firstName><lastName>b</lastName><age>2</age></root>'
            },
            {
                array: [
                    {id: 1, firstName: 'a', lastName: 'a', age: 1},
                    {id: 2, firstName: 'b', lastName: 'b', age: 2},
                    {id: 3, firstName: 'c', lastName: 'c', age: 3},
                    {id: 4, firstName: 'd', lastName: 'd', age: 4},
                    {id: 5, firstName: 'e', lastName: 'e', age: 5}
                ],
                expected: '<root><id>1</id><firstName>a</firstName><lastName>a</lastName><age>1</age><id>2</id><firstName>b</firstName><lastName>b</lastName><age>2</age><id>3</id><firstName>c</firstName><lastName>c</lastName><age>3</age><id>4</id><firstName>d</firstName><lastName>d</lastName><age>4</age><id>5</id><firstName>e</firstName><lastName>e</lastName><age>5</age></root>'
            },
            {
                array: [
                    {id: 1, firstName: 'a', lastName: 'a', age: 1},
                    {id: 2, firstName: 'b', lastName: 'b', age: 2},
                    {id: 3, firstName: 'c', lastName: 'c', age: 3},
                    {id: 4, firstName: 'd', lastName: 'd', age: 4},
                    {id: 5, firstName: 'e', lastName: 'e', age: 5},
                    {id: 6, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id: 7, firstName: 'Naumova', lastName: 'Oksana', age: 18},
                    {id: 8, firstName: 'Nikita', lastName: 'Chudakov', age: 25}
                ],
                expected: '<root><id>1</id><firstName>a</firstName><lastName>a</lastName><age>1</age><id>2</id><firstName>b</firstName><lastName>b</lastName><age>2</age><id>3</id><firstName>c</firstName><lastName>c</lastName><age>3</age><id>4</id><firstName>d</firstName><lastName>d</lastName><age>4</age><id>5</id><firstName>e</firstName><lastName>e</lastName><age>5</age><id>6</id><firstName>Nikita</firstName><lastName>Didenko</lastName><age>19</age><id>7</id><firstName>Naumova</firstName><lastName>Oksana</lastName><age>18</age><id>8</id><firstName>Nikita</firstName><lastName>Chudakov</lastName><age>25</age></root>'
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const actual = convertToXML(array);

            it(`Test okay`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('convertToJSON', () => {
        const testData = [
            {
                array: [],
                expected: '[]'
            },
            {
                array: [
                    {id:1567098389203, firstName: 'Nikita', lastName: 'Didenko', age: 19}
                ],
                expected: '[{"id":1567098389203,"firstName":"Nikita","lastName":"Didenko","age":19}]'
            },
            {
                array: [
                    {id:1567098499764, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098502929, firstName: 'b', lastName: 'b', age: 0}
                ],
                expected: '[{"id":1567098499764,"firstName":"a","lastName":"a","age":1},{"id":1567098502929,"firstName":"b","lastName":"b","age":0}]'
            },
            {
                array: [
                    {id:1567098499764, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098502929, firstName: 'b', lastName: 'b', age: 0},
                    {id:1567098636042, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098653790, firstName: 'b', lastName: 'b', age: 0},
                    {id:1567098668245, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                ],
                expected: '[{"id":1567098499764,"firstName":"a","lastName":"a","age":1},{"id":1567098502929,"firstName":"b","lastName":"b","age":0},{"id":1567098636042,"firstName":"a","lastName":"a","age":1},{"id":1567098653790,"firstName":"b","lastName":"b","age":0},{"id":1567098668245,"firstName":"Nikita","lastName":"Didenko","age":19}]'
            },
            {
                array: [
                    {id:1567098499764, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098502929, firstName: 'b', lastName: 'b', age: 0},
                    {id:1567098636042, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098653790, firstName: 'b', lastName: 'b', age: 0},
                    {id:1567098668245, firstName: 'Nikita', lastName: 'Didenko', age: 19},
                    {id:1567098816592, firstName: 'a', lastName: 'a', age: 1},
                    {id:1567098821848, firstName: 'b', lastName: 'b', age: 0},
                ],
                expected: '[{"id":1567098499764,"firstName":"a","lastName":"a","age":1},{"id":1567098502929,"firstName":"b","lastName":"b","age":0},{"id":1567098636042,"firstName":"a","lastName":"a","age":1},{"id":1567098653790,"firstName":"b","lastName":"b","age":0},{"id":1567098668245,"firstName":"Nikita","lastName":"Didenko","age":19},{"id":1567098816592,"firstName":"a","lastName":"a","age":1},{"id":1567098821848,"firstName":"b","lastName":"b","age":0}]'
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            const actual = convertToJSON(array);

            it(`Test okay`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
});