const apiBaseUrl = import.meta.env.VITE_API_URL;

export const predict = async (text: String, model: String) => {
  const data = {
    text: text,
    clf: model,
  };
  const response = await fetch(`${apiBaseUrl}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return await response.json();
};
