const name = process.argv[2] || 'World';

function greet(name){
    return `Hello, $(name)!`;
}


function looping(agr, index){
    return `Argument ${index}: ${arg}`;
}

// console.log(process.argv.map((arg, index) => `Argument ${index}: ${arg}`));

