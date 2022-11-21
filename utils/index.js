const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer =  require('../lib/engineer');
const Intern = require('../lib/intern');


const dist_dir = path.resolve(__dirname, 'dist')
const dist_path = path.join(dist_dir, 'teamMembers.html')

// this is where our responses from the questions will live
const team_res = []

const renderResponses = require('./src/page.js')

const questions = [
     {
        type: 'input',
        message: 'Enter name..',
        name: 'name',
        validate(data){
            if(!data){
                return "Please, enter a name"
            }
            return true
        }
     },
     {
        type: 'input',
        name:'id',
        message:'Enter Id',
        validate(data){
            if(!data){
                return "Enter an Id"
            }
            return true
        }
    },
     {
        type: 'input',
        name:'email',
        message:'Enter email',
        validate(data){
            if(!data){
                return "Enter an email"
            }
            return true
     }
    },
     {  type:'list',
        message: 'Add team member',
        choices: ['Manager', 'Engineer','Intern'],
        name: 'team',
     },
     {
        type: 'input',
        name:'name',
        message:'Enter Office Number',
        when(data) {
            return data.team === 'Manager'
        }
     },
     {
        type: 'input',
        name:'github',
        message:'Enter Github username',
        when(data) {
            return data.team === 'Engineer'
        }
     },
     {
        type: 'input',
        name:'school',
        message:'Enter School',
        when(data) {
            return data.team === 'Intern'
        }
     }
    
    ];

    function init() {
        inquirer.prompt(questions)
        // .then((data) => {
        //     const filename = `${data.TeamGen.toLowerCase().split(' ').join('')}.json`;
        
        //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        //       err ? console.log(err) : console.log('Success!')
        //     );
        //   });
        if (!fs.existsSync(dist_dir)) {
            fs.mkdirSync(dist_dir)
        }
        // take the responses and run thm through a render function
        fs.writeFileSync(dist_path, renderResponses(team_res))
    }

    init();
