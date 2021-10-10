let input = prompt("Enter Command: ");

let list = ['cookie', 'chicken'];

while (input !== 'quit' && input !== 'q') {
  /*
  print current to do list
  */
  if (input === "list") {
    console.log("**********");
    for (let i = 0; i < list.length; i++) {
      console.log(`${i} : ${list[i]}`);
    }
    console.log("**********");
  }
  /*
  add a new item to do list
  */
  if (input === "new") {
    let newItem = prompt("Enter a item to add: ");
    list.push(newItem);
  }

  /*
  delete a item in to do list with current index
  */
  if (input === "delete") {
    let idxToDelete = prompt("Enter index of item to delete: ");
    list.splice(idxToDelete, 1);
  } 
  input = prompt("Enter Command");
}
console.log("You quit the app");