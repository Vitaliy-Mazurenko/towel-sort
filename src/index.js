
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    if (matrix.length === 0) return matrix;
    return matrix.reduce((prev, item, index) => (index % 2 !== 0) ? prev.concat(item.reverse()) : prev.concat(item));
}
