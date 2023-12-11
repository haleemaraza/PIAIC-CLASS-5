
//    loops
for(let i = 0; i < 11; i++ ){
    console.log(`hello world`)
}


// for revision
let i = 10 ;
// i++ add 1 one in variable 
i++ 
console.log(i);
  

// if we need counting from 1 to 10 
for(let i = 1 ; i < 11; i++){
    console.log(i)
}


// if we need to print persons name 
let std = ["Aylin","Eda", "Thomas"]

for (let i = 0; i < 3; i++){
    console.log(i)
     console.log(std[i])
}


// if we want to print table 
for (let a= 1; a <= 10 ;a++){
     let ans = a * 2 
     console.log("2","x", a, "=", ans)
}


for(let a = 1; a <= 10; a++){
    let ans = a * 3
    console.log("3","x", a, "=", ans)
}

for(let a = 1; a <= 10; a++){
    let ans = a * 4
    console.log("4","x", a, "=", ans)
}

for(let a = 1; a <= 10; a++) {
    let ans = a * 5
    console.log("5","x", a, "=", ans)
}


//   nested loop
for(let i= 0 ; i <3; i++){
    console.log("parent loop", i )


     for (let j = 0; j < 4; j++ )
     console.log("child loop" , j)
}


let videos = ["v1", "v2", "v3"]

console.log(videos.length) 
for (let i = 0; i< videos.length; i++){
    console.log(videos[i])
}


//   object 
// problem 
// let vedio1title = "vedio1"
// let video1description="vedio 1 description"
// let vedio1image = "https://image.com"
// one vedio data is store in many varaiable inserted of this used this 

let video1 = {
    title:"video1 ",
    description:"video 1 description ",
    image:"htttp://image.com"
}
console.log(video1.title)