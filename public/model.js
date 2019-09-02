function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName =lastName;
    this.age = age;
}

function Table() {
    let array = [];
    this.getArray = () => array;
    this.getSize = () => array.length;
    this.startAdd = (id, firstName, lastName, age) => array.unshift(new Person(id, firstName, lastName, age));
    this.endAdd = (id, firstName, lastName, age) => array.push(new Person(id, firstName, lastName, age));
    this.underIndexAdd = (id, firstName, lastName, age, index) => {
        array = [...array.slice(0, index), new Person(id, firstName, lastName, age), ...array.slice(index)];
    };
    this.deleteRecord = index => {
        const id = array[index].id;

        array = array.filter(a => a.id !== id);

        return index + 1;
    };
}