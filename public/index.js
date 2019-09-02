let table;
let firstName, lastName, age, indInput;
let array;
let startAdd, endAdd, underIndexAdd, startDelete, endDelete, byIndexDelete;
let saveCSV, saveYAML, saveXML, saveJSON, sendCSV, sendYaml, sendXML, sendJSON;

const init = () => {
    array = new Table();

    table = document.getElementById('table');

    startAdd = document.getElementById('startAdd');
    endAdd = document.getElementById('endAdd');
    underIndexAdd = document.getElementById('underIndexAdd');

    startDelete = document.getElementById('startDelete');
    endDelete = document.getElementById('endDelete');
    byIndexDelete = document.getElementById('byIndexDelete');

    saveCSV = document.getElementById('saveCSV');
    saveYAML = document.getElementById('saveYALM');
    saveXML = document.getElementById('saveXML');
    saveJSON = document.getElementById('saveJSON');

    sendCSV = document.getElementById('sendCSV');
    sendYaml = document.getElementById('sendYaml');
    sendXML = document.getElementById('sendXML');
    sendJSON = document.getElementById('sendJSON');

    startAdd.onclick = onClickStartAdd;
    endAdd.onclick = onClickEndAdd;
    underIndexAdd.onclick = onClickUnderIndexAdd;
    startDelete.onclick = onClickStartDelete;
    endDelete.onclick = onClickEndDelete;
    byIndexDelete.onclick = onClickByIndexDelete;

    saveCSV.onclick = onClickSaveCSV;
    saveYAML.onclick = onClickSaveYAML;
    saveXML.onclick = onClickSaveXML;
    saveJSON.onclick = onClickSaveJSON;

    sendCSV.onclick = onClickSendCSV;
    sendYaml.onclick = onClickSendYaml;
    sendXML.onclick = onClickSendXML;
    sendJSON.onclick = onClickSendJSON;

};

const createRow = (tr, person, index) => {
    tr.classList.add('persons__table-body');

    let td = tr.insertCell(0);
    td.appendChild(document.createTextNode(index));
    td = tr.insertCell(1);
    td.appendChild(document.createTextNode(person.id));
    td = tr.insertCell(2);
    td.appendChild(document.createTextNode(person.firstName));
    td = tr.insertCell(3);
    td.appendChild(document.createTextNode(person.lastName));
    td = tr.insertCell(4);
    td.appendChild(document.createTextNode(person.age));

    return tr;
};

const setIndexTable = () => {
    let cells = table.getElementsByTagName('td');

    for (let i = 0, j = 1; i < cells.length; i += 5, j++) {
        cells[i].innerHTML = j.toString();
    }
};

const clearInputs = () => {
    document.getElementById('indInput').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('age').value = '';
};

const onClickStartAdd = () => {
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    age = document.getElementById('age').value;

    if (!firstName || !isNaN(Number(firstName))) {
        alert('Wrong input first name!');
        return;
    }

    if (!lastName || !isNaN(Number(lastName))) {
        alert('Wrong input last name!');
        return;
    }

    if (!age || isNaN(age)) {
        alert('Wrong input age!');
        return;
    }

    const id = new Date().getTime();

    array.startAdd(id, firstName, lastName, age);

    const tr = table.insertRow(1);

    createRow(tr, array.getArray()[0], 0);

    setIndexTable();

    clearInputs();
};

const onClickEndAdd = () => {
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    age = document.getElementById('age').value;

    if (!firstName || !isNaN(Number(firstName))) {
        alert('Wrong input first name!');
        return;
    }

    if (!lastName || !isNaN(Number(lastName))) {
        alert('Wrong input last name!');
        return;
    }

    if (!age || isNaN(age)) {
        alert('Wrong input age!');
        return;
    }

    const id = new Date().getTime();

    array.endAdd(id, firstName, lastName, age);

    const tr = document.createElement('tr');

    table.appendChild(createRow(tr, array.getArray()[array.getSize() - 1], array.getSize() - 1));

    setIndexTable();

    clearInputs();
};

const onClickUnderIndexAdd = () => {
    indInput = document.getElementById('indInput').value;

    if ((!indInput && indInput !== 0)) {
        alert('Index is not input!');
        return;
    }

    if (isNaN(indInput)) {
        alert('Index is not a number!');
        return;
    }

    if (indInput < 0 || indInput > array.getSize()) {
        alert('Index out of table!');
        return;
    }

    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    age = document.getElementById('age').value;

    if (!firstName || !isNaN(Number(firstName))) {
        alert('Wrong input first name!');
        return;
    }

    if (!lastName || !isNaN(Number(lastName))) {
        alert('Wrong input last name!');
        return;
    }

    if (!age || isNaN(age)) {
        alert('Wrong input age!');
        return;
    }

    const id = new Date().getTime();

    indInput = Number(indInput);
    array.underIndexAdd(id, firstName, lastName, age, indInput);
    indInput++;

    const tr = table.insertRow(indInput);

    createRow(tr, array.getArray()[indInput - 1], indInput);

    setIndexTable();

    clearInputs();
};

const onClickStartDelete = () => {
    if (!array.getSize()) {
        alert('You can\'t delete first table element of empty table!');
        return;
    }

    table.deleteRow(array.deleteRecord(0));

    setIndexTable();
};

const onClickEndDelete = () => {
    if (!array.getSize()) {
        alert('You can\'t delete last table element of empty table!');
        return;
    }

    table.deleteRow(array.deleteRecord(array.getSize() - 1));

    setIndexTable();
};

const onClickByIndexDelete = () => {
    if (!array.getSize()) {
        alert('You can\'t delete by index table element of empty table!');
        return;
    }

    indInput = Number(document.getElementById('indInput').value);

    if (!indInput) {
        alert('Index is not input!');
        return;
    }

    if (isNaN(indInput)) {
        alert('Index is not a number!');
        return;
    }

    if (indInput < 1 || indInput > array.getSize()) {
        alert('Index out of table!');
        return;
    }

    table.deleteRow(array.deleteRecord(indInput - 1));

    setIndexTable();

    document.getElementById('indInput').value = '';
};

const convertToCSV = array => {
    if (array === undefined || array === null || !array.length) {
        return 'id,firstName,lastName,age';
    }

    let keys = Object.keys(array[0]);
    let result = keys.join(",") + "\n";

    array.forEach(function(obj){
        keys.forEach(function(ind, value){
            if (value) {
                result += ",";
            }

            result += obj[ind];
        });

        result += "\n";
    });

    return result;
};

const convertToYaml = array => {
    let yaml = '';

    array.forEach(item => {
        yaml += '-' + "\n";

        for (let key in item) {
            yaml += "  " + key +': '+ item[key] + "\n";
        }
    });

    return yaml;
};

const convertToXML = array => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n` ;
    xml += `<persons>\n`;

    for (let i = 0; i < array.length; i++) {
        xml += `\t<person_${i}>\n`;
        xml += `\t\t<id>${array[i].id}</id>\n`;
        xml += `\t\t<firstName>${array[i].firstName}</firstName>\n`;
        xml += `\t\t<lastName>${array[i].lastName}</lastName>\n`;
        xml += `\t\t<age>${array[i].age}y</age>\n`;
        xml += `\t</person_${i}>\n`;
    }
    xml += `</persons>\n`;

    return xml;
};

const convertToJSON = array => {
    let result = '[';

    for (let i = 0; i < array.length; i++) {
        result += '{';

        let namesKeysPerson = Object.keys(array[i]);

        for (let j = 0; j < namesKeysPerson.length; j++) {
            let temp = isNaN(array[i][namesKeysPerson[j]]) ? array[i][namesKeysPerson[j]] : Number(array[i][namesKeysPerson[j]]);

            result += typeof temp === 'number' ? `"${namesKeysPerson[j]}":${temp}` : `"${namesKeysPerson[j]}":"${temp}"`;

            if (j + 1 !== namesKeysPerson.length) {
                result += ',';
            }
        }

        result += '}';

        if (i + 1 !== array.length) {
            result += ',';
        }
    }

    result += ']';

    return result;
};

const downloadFile = (filename, body, type) => {
    let element = document.createElement('a');
    element.setAttribute('href', `data:text/${type};charset=utf-8,` + encodeURIComponent(body));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};

const onClickSaveCSV = () => {
    const CSV = convertToCSV(array.getArray());
    const filename = "persons.csv";

    downloadFile(filename, CSV, 'csv');
};

const onClickSaveYAML = () => {
    const YAML = convertToYaml(array.getArray());
    const filename = "persons.yaml";

    downloadFile(filename, YAML, 'yaml');
};

const onClickSaveXML = () => {
    const XML = convertToXML(array.getArray());
    const filename = "persons.xml";

    downloadFile(filename, XML, 'xml');
};

const onClickSaveJSON = () => {
    const JSON = convertToJSON(array.getArray());
    const filename = "persons.json";

    downloadFile(filename, JSON, 'xml');
};

const onClickSendCSV = () => {
    postData('http://localhost:3000/csv',  array.getArray())        
        .catch(error => console.error(error));
};

const onClickSendYaml = () => {
    postData('http://localhost:3000/yaml',  array.getArray())       
        .catch(error => console.error(error));
};

const onClickSendXML = () => {
    postData('http://localhost:3000/xml',  array.getArray())        
        .catch(error => console.error(error));
};

const onClickSendJSON = () => {
    postData('http://localhost:3000/json',  array.getArray())        
        .catch(error => console.error(error));
};

function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: convertToJSON(data)
    })       
}

init();