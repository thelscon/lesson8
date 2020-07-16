'use script' ;

const magicBook = {
    boomSpell: 'Asda masasda',
    soupSpell: 'Dase feads',
};
  
const kettle = {
    material: 'metal',
    result: null,
    ingradients: {
        ingridient1: 'nails',
        ingridient2: 'bat heads',
    } ,    
    shuffle () {
        console.log ( 'Shuffling...' ) ;
    } ,
    newIng ( ingOne, ingTwo ) {
        console.log ( 'Adding...', ingOne, ingTwo )
        this[ingOne] = ingTwo ;
        this.shuffle () ;
    } ,
};

kettle.spellTheCast = function () {
    console.log ( this.material ) ;
    this.shuffle () ;
} ;

kettle.spellTheCast () ;
kettle.newIng ( 'mat', 'test' ) ;
kettle.newIng ( 'mat2', 'test2' ) ;
kettle.newIng ( 'mat3', 'test3' ) ;
console.log ( kettle ) ;

const func = kettle.spellTheCast ;
console.log ( func ) ;