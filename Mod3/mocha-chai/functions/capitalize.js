

function capitalize(str = '') {
    if (typeof str === 'number') {
        throw new TypeError('Arg needs to be a string');
    }

    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

module.exports =  capitalize;