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
    let yaml ='';

    array.forEach(item => {
        yaml += '-' + "\n";
        for (let key in item) {
            yaml += "  " + key +': '+ item[key] + "\n"
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

module.exports = {
    convertToCSV: convertToCSV,
    convertToYaml: convertToYaml,
    convertToXML: convertToXML,
    convertToJSON: convertToJSON
};