export const getDataFromServer = async (Endpoint) => {
  try {
    return fetch(Endpoint)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.status === 200) return res.data;
        else return null;
      });
  } catch (err) {
    throw window.alert(err.Message);
  }
};
//this function for post, patch or upadte
export const sentDataToServer = async (Endpoint, Method, Body = "") => {
  let success = false;
  const init = {
    method: Method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Body),
  };
  console.log(Method, init);
  if (Method === "DELETE") delete init.body;
  console.log("endpoint", Endpoint);
  await fetch(Endpoint, init)
    .then((res) => res.json())
    .then((res) => {
      console.log(
        "-----",
        Method,
        "----*------",
        Endpoint,
        "-----*-------------"
      );
      console.log("respons is: ", res);

      if (res.status > 300) {
        success = false;
        throw window.alert(res.Message);
      } else {
        success = true;
      }
    });
  return success;
};
