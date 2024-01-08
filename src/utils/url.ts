export const getLangQuery = () => {
  const params = location.href.split("?");
  const url = new URLSearchParams(params[1]);
  return url.get("lang") || "";
};
