import axios from 'axios';

export interface UnsplashResImage {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    full: string;
    regular: string;
    small: string;
  };
}

interface UnsplashResResult {
  total: number;
  total_pages: number;
  results: UnsplashResImage[];
}

export async function getUnsplashImages(
  inputValue: string,
  page: number
): Promise<UnsplashResResult> {
  const BASE_URL = 'https://api.unsplash.com/search/photos/';
  const API_KEY = '?client_id=gaADL0NqRmj_AP2QKKfHO40SJeNtEYtmSW2q9KO_oSo';
  const url = `${BASE_URL}${API_KEY}`;
  const params = {
    query: inputValue,
    page,
    per_page: 15,
  };
  const res = await axios.get<UnsplashResResult>(url, { params });
  return res.data;
}
