const API_URL = "http://localhost:8080";

export async function fetchItems() {
  const response = await fetch(`${API_URL}/items`);
  return response.json();
}

export async function addItem(item) {
  const response = await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return response.json();
}
