const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name  ', (nickname) => {
  rl.question('What is a activity you like? ', (activity) => {
    rl.question('What is the song yoy listen while doing that? ', (song) => {
      rl.question('What is your superpower? ', (power) => {
        console.log(`${nickname} likes to do ${activity} while listening ${song}. He can ${power}`);
        rl.close();
      })
    })
  })
});
