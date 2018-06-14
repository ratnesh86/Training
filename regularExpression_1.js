var obj=["1234","5kkhkh","Ram","Ravi","Rajkumar","9hunt@gmail.com","John","Jhon","Sky01","ratnesh@indiatimes.in","Toy","week","show","Roger","myth@gmail.com","harish@gmail.com","brett@hotmail.com",
"christ"]

var regex=/^R/;                                 //^ - begginning with.. This would return all values starting with R. 
var regex1=/^[0-9]/;                            
var regex2=/[0-9]$/;                            //$ prints all the strings ending with given constraint
var regex3=/^[a-zA-Z][a-zA-Z][a-zA-Z]$/;        //Starting with letters, ending with letters and in between one letter that's alphabet
var regex4=/^[a-zA-Z][a-zA-Z]*[a-zA-Z]$/;       //*means one or more occurances. This variable means starting with alphabet ending with alphabeet and can have 0 or more occurances of alphabets. 
var regex5=/^[a-zA-Z].{2,4}[a-zA-Z]$/;         //.means any character and then {2,3} means that any character for with mininum 2 places amd maximum 4 places 
var regex6=/^[Jj](oh|o|ho)n$/;                  //means fetching values tarting with J or j and can have any permutations of oh or o or ho and ends with n
var regex7=/^[a-z0-9][a-z0-9_\.]+@[a-z]+\.[a-z]{2,3}$/;   //email can start with alphabets or number, have numbers / alpha in between, it should have a . in between which here is overwridden with \.
                                                        //we shoudl then have an @ sign and then a . and then it can be in or com. Minimum 2 max 3 chars. 

for (var x in obj)
    {
//        if (regex.test(obj[x]))
//            console.log(obj[x]);
//        if (regex1.test(obj[x]))
//           console.log(obj[x]);
//        if(regex2.test(obj[x]))                 //print all numbers ending 0-9
//            console.log(obj[x]);
//        if (regex3.test(obj[x]))
//            console.log(obj[x]);
//        if (regex4.test(obj[x]))
//            console.log(obj[x]);            
//        if (regex5.test(obj[x]))
//            console.log(obj[x]);            
//        if (regex6.test(obj[x]))
//            console.log(obj[x]); 
        if (regex7.test(obj[x]))
            console.log(obj[x]); 
    }