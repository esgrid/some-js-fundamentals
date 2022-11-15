const data = require('./data')

let information = {}
async function display(item){
    // console.log(await data(item))
    information = await data(item)
    // console.log(information)
    for (const key in information) {
        console.log(information[key])
    }
    console.log(information.kids)
    for (let i = 0; i < information.kids.length; i++){
        console.log(`item: ${information.kids[i]} : 0`)
    }

    information.kids.forEach(item => console.log(`item: ${item} : 1`) )

    console.log(information.kids.map(item => `item: ${item} : 2`))

    console.log(information.kids.filter(item => item > 9000))

}

display(8863)