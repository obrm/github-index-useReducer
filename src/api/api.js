import axios from 'axios';

let githubClientId;
let githubClientSecret;

// Using import.meta.env.MODE to check the environment
if (import.meta.env.MODE === 'development') {
  // Using VITE_ prefix for environment variables in Vite
  githubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
  githubClientSecret = import.meta.env.VITE_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
  githubClientSecret = import.meta.env.VITE_GITHUB_CLIENT_SECRET;
}

const usersApi = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
  params: {
    client_id: githubClientId,
    client_secret: githubClientSecret,
  },
});

const reposApi = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
  params: {
    client_id: githubClientId,
    client_secret: githubClientSecret,
    per_page: 5,
    sort: "updated:asc",
  },
});

export { usersApi, reposApi };
