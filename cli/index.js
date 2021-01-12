#!/user/bin/env node 
const path = require('path')
const { program } = require('commander');
const inquirer = require('inquirer');
const childrenProcess = require('child_process')
program
    .arguments('<dir>')
    .description('this is path')
    .action((dir) =>{
        return inquirer.prompt([
            {
                'type':'list',
                'name': 'framework',
                'message': 'which framework do you like?',
                'choices': [
                    'react', 'vue'
                ]
            }
        ]).then((answers)=>{
            console.log('reslut',dir,answers);
            const fullDir = path.resolve(process.cwd(),dir)
            const command = `git clone https://github.com/loatheb${answers.frameword}.boilerplate.git ${fullDir}`
            childrenProcess.execSync(command);
        })
        
    })
program.parse(process.argv);
console.log('hello lili');