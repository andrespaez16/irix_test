
(function () {
    var ANALYZE_1 = "What are the time (Big O notation) and space complexity of your solution?"R:/ O(N);
    var ANALYZE_2 = "What are the limitations of your solution? R/: I had to make a second  array to save the no repeated values but the best form is a return in one variable the result not in one array  ";
    var ANALYZE_3 = "Why have you decided to implement it on that way? i decided this way but the way simple is make two loops one inside of other for get the value and this way is not the best for the exercise according the notation O";
    var POSSIBLE_IMPROVEMENTS = "What do you think we could do to get a better implementation? R/: I think that the better implementation is make to all the operation no have loops ";
    var SEND_CHALLENGE = "Send me your challengeIrix.js file to luis.sanchez@irixapp.com."
    var SOLVE_CHALLENGE = "Implement the logic of the addNumber and getFirstNonDuplicated functions, do not limit yourself, if you need to create variables just do it. Good Luck”

    main();

    function addNumber(num) {
        console.info("This function adds a number to the 'sequence'");
          /* an empty array is created and saved in a variable */
        var numbers=[];
        function addNumber(num){
         /* the push method is used to fill the empty array that was previously created*/
             numbers.push(num);
            /*the numbers contained in the numbers array are printed*/
            console.log(num)    
        }  
    }

    function getFirstNonDuplicated(arr) {
        console.info("This function return the first non duplicated number of the 'sequence'");
         /* an empty object is created where it will be stored how many times is the number or item within the array*/
            let object = {}
            /*an empty array is created to store the numbers that are not repeated*/
            const arr2 = []
            /* we go through the array that enters as a parameter and through a ternary operator we ask 
              if the key contains is not defined add 1 and if it is not equal to 1*/
            arr.forEach(function(item){
                object[item] = object[item]!== undefined ? object[item]+=1 : object[item]=1
            })
            /* traverse the array again and ask if the object has a key that is equal to 1 save it or push it in array 2 */
            arr.forEach(function (item){
                if(object[item]==1){
                arr2.push(item)
                }                    
            })
            //the  first number or first position of the array2 is returned
            return arr2[0]
    }

    function steps() {
        console.info(SOLVE_CHALLENGE);
        console.info(ANALYZE_1);
        console.info(ANALYZE_2);
        console.info(ANALYZE_3);
        console.info(POSSIBLE_IMPROVEMENTS);
        console.info(SEND_CHALLENGE);
    }

    function main() {
        steps();
        /*
        console.info("This is an example of a possible solution");
        addNumber(5);
        addNumber(3);
        addNumber(5);
        addNumber(6);
        getFirstNonDuplicated(); console.log("Previous operation returns 3");
        addNumber(3);
        getFirstNonDuplicated(); console.log("Previous operation returns 6");
        */
         /* the call function is save for print and show it */
        const result = getFirstNonDuplicated(numbers)  
        console.log("result is :",result)
            }
}());