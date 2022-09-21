// remove dublicate alphabets from array

let str =[ 'hellojyotinicetomeetyoujyotihowareyoutodayjyoti' ] 

let newstr = str.toString().split().join()

let result = [...new Set(newstr)].join('')
console.log(result)

// output :helojytincmuward