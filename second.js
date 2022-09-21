 // //get all aplphabet in array

 let str = "hello jyoti, nice to meet you jyoti, how are you today jyoti?";
 let newstr =  str.split().join("").replace(/[^a-zA-Z ]/g, '');
 let result= newstr.replace(/\s/g, '') ;
 let a =[]
 a.push(result)
 console.log(a)

//  output: [ 'hellojyotinicetomeetyoujyotihowareyoutodayjyoti' ]