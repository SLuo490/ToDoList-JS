let input = prompt("Enter Command: ");

let list = ['cookie', 'chicken'];

while (input !== 'quit' && input !== 'q') {
  if (input === "list") {
    console.log("**********");
    for (let i = 0; i < list.length; i++) {
      console.log(`${i} : ${list[i]}`);
    }
    console.log("**********");
  }
  input = prompt("Enter Command");
}
console.log("You quit the app");