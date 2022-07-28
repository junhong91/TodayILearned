// Java: Exception class
// JavaScript: Error
// const array = new Array(100000000000000000000); // occur RangeError intentionally

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
}

const fileName = "file";
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(error);
} finally {
  closeFile(fileName);
  console.log("Finally");
}
