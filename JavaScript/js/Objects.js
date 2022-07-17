const ourDog = {
    'name' : "Nayla",
    'legs' : 4,
    'tails': 1,
    'friends' : ['Everything'],
    'favorite food': 'meat'
};


const nameValue = ourDog.name;
const numberLegs = ourDog.legs;
const favoriyeFood = ourDog['favorite food'];

//Updating object info
ourDog.name = 'Big Nayla'

//Adding info to my object 
ourDog.bark = 'woff-woff'

//Delete info 
delete ourDog.bark;

console.log(nameValue, + ' ' + numberLegs + ' ' +favoriyeFood);


const testObj = {
    12: 'Namath',
    16: 'Montana',
    19: 'Unitas'
};

const playerNumber = 16;
const palyer = testObj[playerNumber];

console.log(palyer);
console.log(ourDog)
 
function phoneticLookup(val){
    let result = '';

    const lookup= {
        'alpha' :'Adams',
        'bravo' : 'Boston',
        'charlie' : 'Chicago',
        'delta' : "Denver",
        'echo' : 'Easy',
        'foxtrot' : 'frank'
    }

    result = lookup[val]

    return result
}
 
console.log(phoneticLookup('charlie'));

//comprobe object properties

function checkObj(checkProp){
    if (ourDog.hasOwnProperty(checkProp)){
        return ourDog[checkProp];
    } else{
        return 'Not found'
    }
    
  
}

console.log(checkObj('legs'))


//Manipulating complex objects

const myMusic = [
    {
        'artist' : 'Billy joel',
        'title' : 'Piano Man',
        'release_year': 1973,
        'formats' : [
            'CD',
            '8T',
            'LP'
        ],
        'gold' : true
    },

    {
        'artist': 'Bub Carnes',
        'title' : 'Cereal Man',
        'release_year' : 2003,
        'formats': [
            'YouTube video'
        ]

    }
]  
const firstArtist = myMusic[0].formats[1]
console.log(firstArtist)
//Accessing Nested Objects

const myStorage = {
    "car" : {
        "inside":{
            'glove box': 'maps',
            'passenger seat': 'crumbs'
        },
        'outside':'jack'
    }
}

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

//accessng nested arrays