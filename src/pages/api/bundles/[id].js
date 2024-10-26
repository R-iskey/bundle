// Import your database connection or data-fetching utility
import { getBundleById } from '@/lib/bundleService'; // Replace with actual path to your data service

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const bundle = getBundleById(Number(id));
      if (bundle) {
        res.status(200).json(bundle);
      } else {
        res.status(404).send();
      }
    } catch (error) {
      console.error('Error fetching bundle:', error);
      res.status(500).send();
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
