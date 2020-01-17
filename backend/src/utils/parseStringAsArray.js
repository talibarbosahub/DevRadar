module.exports = function parseStringAsArray (arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim()); // cortar a string sempre que tem virgula e fazer um map para remover os espaços
}