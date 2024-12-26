// functions in js 
// normal funcn, arrow funcn


// function add(a,b){
//     console.log(a+b)
// }
// add(5,10)




// const showName = (NAME) => {
//     console.log("Hello" + NAME)

// }
// showName("mern stack")





const myArray = [ 1,2,3,4,5]
for (let i =0;i<myArray.length; i++ ){
    console.log(myArray[i])

}

// using js methods 
// 1.map 

const newArr = myArray.map(item => item*2)
console.log(newArr)

const filteredArray = myArray.filter(item => item<3)
console.log(filteredArray)

