let input = prompt("Enter Command: ");

const list = [];

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
  } else if (input === "new") {
    /*
    add item to list
    */
    const newItem = prompt("Enter a item to add: ");
    list.push(newItem);
    console.log(`${newItem} added to list`);
  } else if (input === "delete") {
    const idxToDelete = parseInt(prompt("Enter index of item to delete: "));
    /*
      delete item in list if the index is a valid number and is in the range of list
    */
    if (!Number.isNaN(idxToDelete) && idxToDelete < list.length) {
      const deleted = list.splice(idxToDelete, 1);
      console.log(`${deleted[0]} has been removed`);
    } else {
      console.log("Invalid Index");
    }
  }
  input = prompt("Enter Command");
}
console.log("You quit the app");