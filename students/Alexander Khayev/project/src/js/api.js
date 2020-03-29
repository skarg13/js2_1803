/**
 * use as:
 * makeGETRequest("https://ya.ru")
 * .then(xhr => {
 *     alert('then\r\n\r\n' + xhr.responseText);
 * })
 * .catch(xhr => {
 *     alert('Ошибка: ' + xhr.status+"\r\nStatus:"+xhr.statusText);
 * });
 *
 * @param url
 * @returns {Promise<XMLHttpRequest>}
 */
function makeGETRequest(url, timeout = 3000) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.timeout = timeout;

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        return xhr.status === 200 ? resolve(xhr) : reject(xhr);
      }
    }

    xhr.ontimeout = () => reject(xhr);
    xhr.onerror = () => reject(xhr);

    try {
      xhr.open('GET', url, true);
      xhr.send();
    } catch (e) {
      reject(xhr);
    }
  });
}

