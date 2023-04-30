const names = ['emon', 'nasir', 'imran', 'sazzad', 'habib', 'sayed', 'fahmid', 'emon', 'nasir', 'rayhan', 'rifat'];


function removeDuplicate(names) {
    let unique = [];
    /*  for (let i = 0; i < names.length; i++) {
         let element = names[i];
         // console.log(element);
     } */

    // for of
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqNames = removeDuplicate(names);
console.log(uniqNames);