const sentence = "hello there from lighthouse labs";
let count = 0;
let newline = sentence.length;
for (const char of sentence) {
  count += 500;
  setTimeout(() => { process.stdout.write(char); }, count);
}
setTimeout(() => { console.log('') }, count);