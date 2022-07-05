const myArgs = process.argv.slice(2);
const times = myArgs
  .filter(x => x >= 0)
  .filter(x => !isNaN(x))
  .map(x => x * 1000)
  .sort((a, b) => {
    return a - b;
  });

for (const time of times) {
  setTimeout(() => {
    process.stdout.write('\x07');
    process.stdout.write(`.\n`);
  }, time);
}