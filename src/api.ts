import axios from 'axios';

const WILDBERRIES_API_URL = 'https://dev.wildberries.ru/openapi/wb-tariffs';
const TOKEN = process.env.WILDBERRIES_API_TOKEN;

export async function getTariffs() {
  try {
    const response = await axios.get(WILDBERRIES_API_URL, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при запросе к API:', error);
    throw error;
  }
}