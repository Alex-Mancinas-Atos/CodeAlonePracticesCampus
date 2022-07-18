const collection = {
    '2548': {
        'album' : 'Slippery When Wet',
        'artist' : 'Bon Jovi',
        'tracks' : [
            'Let It Rocks',
            'You Give Love a Bad Name'
        ]
    },
    '2468': {
        'album' : '1999',
        'artist': 'Price',
        'tracks': [
            '1999',
            'Little Red Corvette'
        ]
    },
    "1245":{
        'artists':'Robert Palmer',
        'tracks':[]
    },
    '5439': {
        'album': 'ABBA Gold'
    }
};

const collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRescords(id, prop, value){
    if (value === ''){
        delete collection[id][prop]
    } else if(prop === 'tracks'){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection
}

updateRescords(2468, "tracks", "test");
console.log(updateRescords(5439, 'artist', 'ABBA'));
