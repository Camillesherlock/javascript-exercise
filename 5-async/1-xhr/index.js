function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('GET', URL, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // The request has been completed successfully
        successCallback(xhr.responseText);
      } else {
        errorCallback(xhr.statusText);
      }
    }
  };
  xhr.send();
  // end -->
}
const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    console.log(1);
    //console.log(JSON.parse(result).name);
    //document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
    //console.error(error);
  }
);
