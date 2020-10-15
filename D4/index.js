let students = [];
let teamSize = 0;
let teams = [];

let addStudent = () =>{
    let studentName = document.getElementById('studentName').value;
    students.push(studentName);
    let namesList = document.getElementById('namesList');
    let studentToAdd = document.createElement('p');
    studentToAdd.innerText = studentName;
    namesList.appendChild(studentToAdd);
    console.log(studentName);
}

let setTeamSize = () =>{
    teamSize = document.getElementById('teamSizeInput').value;
    let teamSizeP = document.createElement('p');
    let teamSizeContainer = document.getElementById('teamSize');
    teamSizeP.innerText = 'Team Size: ' + teamSize;
    teamSizeContainer.appendChild(teamSizeP);
    console.log(teamSize);
}

let addStdToTeam = () =>{
    // let numOfTeams = (students.length/teamSize);
    // numOfTeams = Math.ceil(numOfTeams);
    // let group = [];
    // while(group.length < teamSize){
    //     let student = students[0];
    //     group.push(student);
    //     students.shift();
    //     for(let i=0; i<group.length; i++){
    //         console.log('Group: ',group[i]);
    //     }
    // } 
    // if(group.length === teamSize){
    //     console.log('group length is eqaul to teamsize')
    //     teams.push(group);
    //     for(let i=0; i<numOfTeams; i++){
    //         console.log(numOfTeams);
    //     }
    //     group = [];
    // }else{}
    
    // let stds = Object.assign(students);
    // let teams = [];
    // for(let i=0; i < teamSize; i++){
    //     teams.push(i);
    // }
    // console.log(teams);

    let teams = [];
    let numOfTeams = (students.length/teamSize);
    numOfTeams = Math.ceil(numOfTeams);
    let student = students.shift();
    teams.push(student);
    let parent = document.getElementById('students');

    for(let x=0; x<teams.length; x++){
        for(let i=0; i<numOfTeams; i++){
            let elem = document.createElement('p');
            elem.innerText = teams[x];
            parent.appendChild(elem);
        }
        let line = document.createElement('br');
        parent.appendChild(line);
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