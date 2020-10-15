let students = [];
let shuffledStudents = [];
let teams = [];
let team = [];
let teamSize;
let teamsNum;
let studentIndex = 0;

let addStudent = () =>{
    let studentName = document.getElementById('studentName').value;
    if(studentName !== ''){
        students.push(studentName);
        let namesList = document.getElementById('namesList');
        let studentToAdd = document.createElement('p');
        studentToAdd.innerText = studentName;
        namesList.appendChild(studentToAdd);
        console.log(studentName);
        document.getElementById('studentName').value = '';
    }
    
}

let shuffle = (array) =>{
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let setTeamSize = () =>{
    teamSize = document.getElementById('teamSizeInput').value;
    if(teamSize > 0){
        let teamSizeParagraph = document.createElement('p');
        let teamSizeContainer = document.getElementById('teamSize');
        teamSizeParagraph.innerText = 'Team Size: ' + teamSize;
        teamSizeContainer.appendChild(teamSizeParagraph);
        document.getElementById('teamSizeInput').disabled = true;
        document.getElementById('setTeamSize').disabled = true;
    } else {
        let teamSizeParagraph = document.createElement('p');
        let teamSizeContainer = document.getElementById('teamSize');
        teamSizeParagraph.innerText = teamSize + ' is not a valid team size. Please give a positive number.';
        teamSizeContainer.appendChild(teamSizeParagraph);
        document.getElementById('teamSizeInput').value = '';
    }
    teamsNum = Math.ceil(students.length/teamSize);
    console.log('Number of teams: ', teamsNum);
}

let addStdToTeam = () =>{
    //to make the arrays of teams
    for(let i=0; i<teamsNum; i++){
        for(let j=0; j<teamSize; j++){
            team.push('null');
        }
        teams.push(team);
        team = [];
    }
    //too mix the element inside array
    shuffledStudents = shuffle(students);
    console.log('shuffeld array: ',shuffledStudents);
    
    //to set given students instead of null inside array
    for(let x=0; x<teamsNum; x++){
        for(let y=0; y<teamSize; y++){
            teams[x][y] = shuffledStudents[studentIndex];
            studentIndex++;
        }
    }
    console.log('non-null teams: ', teams);

    //to create dom elements and display the students
    for(let a=0; a<teamsNum; a++){
        let studentsList = document.getElementById('students');
        let breakLine = document.createElement('br');
        studentsList.appendChild(breakLine);
        //to generate a group name
        let groupName = document.createElement('h6');
        groupName.innerText = 'Group ' + (a+1);
        studentsList.appendChild(groupName);
        for(let b=0; b<teamSize; b++){
            let student = document.createElement('p');
            student.innerText = teams[a][b];
            studentsList.appendChild(student);
            studentsList.appendChild(breakLine);
        }
        let line = document.createElement('hr');
        studentsList.appendChild(line);
    }
    

}


window.onload = function(){
    let addStudentBtn = document.getElementById('addStudent');
    addStudentBtn.onclick = addStudent;

    let teamSizeBtn = document.getElementById('setTeamSize');
    teamSizeBtn.onclick = setTeamSize;

    let addStudentToTeam = document.getElementById('addToTeam');
    addStudentToTeam.onclick = addStdToTeam;
};