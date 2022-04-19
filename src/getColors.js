export const getColors = async (setTestTheme) => {
  const COLOR_API_URL = "http://colormind.io/api/";

  const reqOptions = {
    method: "POST",
    body: JSON.stringify({
      model: "default"
    })
  };

  const response = await fetch(COLOR_API_URL, reqOptions);

  const json = await response.json();

  const colorArr = json.result;

  setTestTheme(colorArr);
};
