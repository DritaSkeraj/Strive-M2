let students = ['a', 'b', 'c', 'd', 'e'];
console.log('students: ', students);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shuffledStudents = shuffle(students);
console.log('shuffeld students: ', shuffledStudents);

let teamSize = 3;
let teamsNum = Math.ceil(students.length/teamSize);
console.log('Team Size: ', teamSize);
console.log('Teams in total: ', teamsNum);

let teams = [];
let team = [];
let index = 0
for(let i=0; i<teamsNum; i++){
    for(let j=0; j<teamSize; j++){
        team.push(students[index]);
        index++;
    }
    teams.push(team);
    team = [];
}

console.log('Teams Array: ', teams);
//expected output => [['o', 'o', 'o'], ['o', 'o', 'o']];

// let teams = [];
// let team = [];
// for(let i=0; i<teamsNum; i++){
//     for(let j=0; j<teamSize; j++){
//         team.push('o');
//     }
//     teams.push(team);
//     team = [];
// }
/*







*/