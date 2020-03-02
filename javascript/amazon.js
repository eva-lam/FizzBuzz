function solution(A) {

    //goal: return the beginning of any ascending slice of A of 
    let comb = []
    //generate combination with size of 1 
    for (i = 0; i < A.length; i++) {

        comb.push(combinations1 = generateCombinations(A[i], A[i]))
        // console.log(combinations1)

    }
    //generate combination with size of 2 
    for (i = 0; i < A.length; i++) {
        if (A[i] != A[A.length - 1]) {
            comb.push(combinations2 = generateCombinations(A[i], A[i + 1]))
            // console.log(combinations2)

        }
    }


    console.log(comb)





    //step 1: generate all possible combination of slices - brute force


    //step 2: select those that are only ascending - analyze array 

    //condition 1 for ascending - size =1 and same element 
    //condition 2 for ascending - each corresponding element is increasing

    //step 3: determine the max size of ascending array and replace the variable maxSize
    //step 4: only select those slices that match max size 

    //step 5: return the beginning of the slice 
}

function check(comb2) {




}



function generateCombinations(firstElement, secondElement) {

    let combo = [];


    // Recursion call to generate a combination of size 1 

    combo.push(firstElement, secondElement)



    //recusion call to generate a combination of size of 2


    return combo

}

solution([2, 3, 4, 3, 6])