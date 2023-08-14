import { NextApiRequest, NextApiResponse } from 'next';
import { ItemFactory } from '@lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Handle GET request
  if (req.method === 'GET') {
    // Return all allowed users
    const item = await ItemFactory.readAll();
    res.status(200).send(item);

    return;
  }

  // Handle POST request
  if (req.method === 'POST') {
    // Get the data from the request
    const data = req.body;
    let item;
    try {
      item = await ItemFactory.create(data);
    } catch (e) {
      console.log('Error allowed login: ', e);
      res.status(500).send('internal server error'); // Bad Request
      return;
    }
    res.status(200).send(item);
    return;
  }
  res.status(405).send('method not allowed'); // Method Not Allowed
};
