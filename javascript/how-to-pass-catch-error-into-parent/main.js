try {
  var response = child();
  console.log("why here?");
} catch (err) {
  console.log("Should show this", err);
}

function child() {
  try {
    throw new Error("Oops");
  } catch (err) {
    console.log("Child error", err);
  }
}
