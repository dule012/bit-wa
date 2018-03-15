const RegisterForAlerts = require('./MemoryInfoModule.js')

const register = (message) => {
    console.log(message);
}

RegisterForAlerts(register);