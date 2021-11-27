module.exports = {
    matrixProduct: function (mat1, mat2){
        let mat1_row = mat1.length;
        let mat1_col = mat1[0].length;
        let mat2_row = mat2.length;
        let mat2_col = mat2[0].length;
        let result = new Array(mat1_row);
        if (mat1_col !== mat2_row){
            return "Cannot multiple the matrices."
        }
        for(let i = 0; i < mat1_row; ++i){
            result[i] = new Array(mat2_col);
            
            for(let j = 0; j < mat2_col; ++j){
                result[i][j] = 0;
    
                for(let k = 0; k < mat1_col; ++k){
                    result[i][j] += mat1[i][k] * mat2[k][j]; 
                }
            }
        }
    
        return result;
    },
    
    sumOfMatrices: function (mat1,mat2){
        let mat1_row = mat1.length;
        let mat1_col = mat1[0].length;
        let mat2_row = mat2.length;
        let mat2_col = mat2[0].length;
        let result = new Array(mat1_row);
        if (mat1_col !== mat2_row){
            return "Cannot sum the matrices."
        }
        for(i = 0; i < mat1_row; ++i){
            result[i] = new Array(mat2_col);
            
            for(j = 0; j < mat2_col; ++j){
                result[i][j] = 0;
    
                for(k = 0; k < mat1_col; ++k){
                    result[i][j] += mat1[i][k] + mat2[k][j]; 
                }
            }
        }
    
        return result;
    },

    sumOfArray: function (arr){
        let ArrResult = 0;
        for(let w = 0; w < arr.length; w++){
            ArrResult += arr[w];
        }
        return ArrResult;
    },

    sumOfEachRow: function (mat ){
        let ArrResult = [];
        for (let w = 0; w < mat.length; w++){
            ArrResult.push(this.sumOfArray(mat[w]))
        }
        return ArrResult;   
    },
}