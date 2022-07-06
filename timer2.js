const stdin = process.stdin;
const stdout = process.stdout;
stdin.setEncoding('utf8');
stdin.setRawMode(true);

const beep = () => {
  return stdout.write(`.\n`);
};

stdin.on('data', data => {
  if (data === 'b') {
    beep();
  }
  if (data >= 1 && data <= 9) {
    let timer = data * 1000;
    stdout.write(`Setting timer for ${data} seconds...\n`);
    setTimeout(() => {
      stdout.write(`.\n`);
    }, timer);
  }
  if (data === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
});
