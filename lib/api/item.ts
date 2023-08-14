import { Item } from '@lib/interfaces';

/**
 * API Client for our web client against our NextAuth server
 */
class ItemApi {
  url: string;
  constructor(url?: string) {
    this.url = url ?? '/api';
  }

  /**
   * Create a new item
   */
  async create(attrs: Partial<Item> = {}): Promise<Item> {
    return fetchJson(`${this.url ?? ''}/item`, {
      method: 'POST',
      body: JSON.stringify(attrs),
    });
  }

  /**
   * Get all items
   * @returns {Promise<Item[]>}
   * @memberof ItemApi
   * @throws {Error} if the request fails
   */
  async readAll(): Promise<Item[]> {
    return fetchJson(`${this.url ?? ''}/item`);
  }
}

async function fetchJson<T>(url: string, opts?: {}): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...opts,
    });
    const data = await response.json();

    return data as T;
  } catch (error) {
    throw error;
  }
}

async function fetchStatus(url: string, opts?: {}): Promise<number> {
  try {
    const response = await fetch(url, {
      ...opts,
    });

    return response.status;
  } catch (error) {
    throw error;
  }
}

const itemApi = new ItemApi();
export default itemApi;

