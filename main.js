const matricOP = require("./utils");

let mat1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
 ]
 
 let mat2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13,14,15,16]
 ]

console.log(matricOP.sumOfMatrices(mat1, mat2));
console.log(matricOP.matrixProduct(mat1, mat2));
console.log(matricOP.sumOfEachRow(mat1));