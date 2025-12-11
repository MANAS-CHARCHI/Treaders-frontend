export async function apiFetch(url, options = {}) {
  const defaultOptions = {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(url, { ...defaultOptions, ...options });

  if (response.status === 401 && url !== "http://localhost:5001/api/user/login") {
    // If the URL is NOT the login endpoint, treat this as a global session expiry.
    localStorage.clear();

    // Redirect to login page immediately
    window.location.href = "/login";

    // Crucial: Return a response here so the calling function doesn't crash 
    // trying to process an undefined response object after the redirect starts.
    return response;
  }

  return response;
}