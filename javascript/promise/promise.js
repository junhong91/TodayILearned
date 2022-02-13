// getData() W/O promise

const URL_ADDR = "http://localhost/3000";

function getData(callbackFunc) {
  $.get(`${URL_ADDR}/products/1`, function (resp) {
    callbackFunc(resp);
  });
}

getData(function (tableData) {
  console.log(tableData);
});

// getData() with promise
function getData(callbackFunc) {
  return new Promise(function (resolve, reject) {
    $.get(`${URL_ADDR}/products/1`, function (resp) {
      resolve(resp);
    });
  });
}

getData().then(function (tableData) {
  console.log(tableData);
});
