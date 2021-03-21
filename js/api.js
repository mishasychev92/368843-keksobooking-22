const URL_SERVER_GET = 'https://22.javascript.pages.academy/keksobooking/data';
const URL_SERVER_POST = 'https://22.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  fetch(URL_SERVER_GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      onFail(`${response.status}: ${response.statusText}`);
    })
    .then((adData) => {
      onSuccess(adData);
    })
    .catch(() => onFail('Не удалось получить данные.'));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    URL_SERVER_POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { 
  getData,
  sendData
};