

module.exports = {
  postData
}

async function postData(url = '', data = {}){

  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stingify(data)
  });

  return awaitn response.json();
}
