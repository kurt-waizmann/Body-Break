export const getDataFromServer = async (Endpoint, data) => {
  try {
    return fetch(Endpoint)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) return res.data;
        else return null;
      });
  } catch (err) {
       throw window.alert(err.Message)
  }
};

