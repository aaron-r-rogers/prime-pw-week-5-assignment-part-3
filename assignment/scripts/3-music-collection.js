console.log('***** Music Collection *****')
console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let criteria = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(criteria);
    return criteria;
}

//BEGIN TEST
console.log(addToCollection('Physcial Graffiti', 'Led Zeppelin', '1975'));
console.log(addToCollection('History of a Feeling', 'Madi Diaz', '2021'));
console.log(addToCollection('Twin Shadow', 'Twin Shadow', '2021'));
console.log(addToCollection('Led Zeppelin II', 'Led Zeppelin', '1969'));
console.log(addToCollection('Rumours', 'Fleetwood Mac', '1977'));
console.log(addToCollection('The Freewheelin Bob Dylan', 'Bob Dylan', '1963'));
console.log(collection)
//END TEST 

function showCollection(array) {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
    }
}

//BEGIN TEST
showCollection(collection);
//END TEST 

function findByArtist(artist) {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
        if(collection[i].artist === artist) {
            result.push(collection[i]);
        }
    }
    return {result};
}

//BEGIN TEST
console.log(findByArtist('Led Zeppelin'));
console.log(findByArtist('Adele'));
console.log(findByArtist('Twin Shadow'));
//END TEST


//STRETCH GOALS

function search(criteria) {
    let result = [];
    let array = Object.values(criteria);
    for (let i = 0; i < array.length; i++) {
        if (arreay[i].artist === artist && array[i].year === year) {
            result.push(array[i]);
        }
    } 
}

