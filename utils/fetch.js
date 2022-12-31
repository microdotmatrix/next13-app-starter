export async function fetchData(url, options) {
  return await fetch(url, options)
    .then(r => checkStatus(r))
    .then((r) => r.json());
}

export async function fetchHTML(url, options) {
  return await fetch(url, options).then((r) => (r).text());
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
  }
}