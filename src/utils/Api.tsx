const apiBaseUrl = import.meta.env.VITE_API_URL;

export const predict = async (text: String, model: String) => {
  const data = {
    text: text,
    clf: model ? model : "bayes",
  };
  const response = await fetch(`${apiBaseUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};
