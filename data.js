const fetch = require('isomorphic-fetch')

// async function data(item) {
//     const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
//     const result = await response.json()
//     return result
// }

const data = async(item) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
    const result = await response.json()
    return result    
}


module.exports = data

