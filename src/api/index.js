const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";
const url = "https://api.unsplash.com/photos";

export async function getImages(page) {
  const res = await fetch(`${url}/?client_id=${key}&per_page=10&page=${page}`);
  const data = await res.json();
  if (res.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
}
export async function getImageStats(id) {
  const res = await fetch(`${url}/${id}/statistics/?client_id=${key}`);
  const data = await res.json();
  if (res.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
}
