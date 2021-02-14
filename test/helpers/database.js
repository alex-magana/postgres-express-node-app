const { spawn } = require("child_process");

const execute = (command) => {
    const executable = spawn(command);

    executable.stdout.on('data', data => {
        console.log(`stdout: ${data}`);
    });

    executable.stderr.on('data', data => {
        console.log(`stderr: ${data}`);
    });

    executable.on('error', error => {
        console.log(`error: ${error}`);
    });

    executable.on('close', code => {
        console.log(`The child process exited with code: ${code}`);
    });
};

const dataSetUp = () => {
    execute('npm run seed');  
};

const dataTeardown = async () => {
    execute('npm run seed');  
};

module.exports = {
    dataSetUp,
    dataTeardown,
};