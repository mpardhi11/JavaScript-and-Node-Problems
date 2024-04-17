/* 
Two strings are given as input. 
Write a program to check whether they are anagrams or not. 
Two strings are considered anagrams if they have the same characters occurring the same number of times. 
However, the order in which they occur may or may not be different. 
For example: "javatpoint", and "ttaaniojvp" are considered as anagrams. 
Each character presents in "javatpoint" are also there in "ttaaniojvp". 
Also, the characters which are not present in "javatpoint" are also not there "ttaaniojvp".

*/

function checkAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }

    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(checkAnagram("javatpoint", "ttaaniojvp")); // true
console.log(checkAnagram("javatpoint", "ttaaiodjvp")); // false
console.log(checkAnagram("javatpoint", "ttaaijvp")); // false


