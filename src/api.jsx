

export async function apiFetch(url, options = {}) {
  const defaultOptions = {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(url, { ...defaultOptions, ...options });

  if (response.status === 401) {
    // remove local data
    localStorage.clear();

    // redirect to login
    window.location.href = "/login";
  }

  return response;
}
