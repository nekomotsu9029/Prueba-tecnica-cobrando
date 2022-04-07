function isPalindrome(str){
    var normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
    return normalized.join('') === normalized.reverse().join('');
}

if(isPalindrome("recono")){
    console.log("Es Palindrome");
}else{
    console.log("No es Palindrome");
}