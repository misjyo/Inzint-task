// indexof  nth occurance of jyoti in string

let str = "hello jyoti, nice to meet you jyoti, how are you today jyoti?";
function getPos(str, subStr, i) {
    return str.split(subStr, i).join(subStr).length;
}

  console.log(getPos(str, "jyoti", 3));

//  output:55