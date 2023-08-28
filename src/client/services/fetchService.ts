const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

export const fetchData = async (endpoint: string) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('fetch error', error);
    throw error;
  }
};
