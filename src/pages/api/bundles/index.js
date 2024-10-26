import {getBundles} from '@/lib/bundleService';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const bundles = await getBundles(); // Fetch all products
      res.status(200).json(bundles);
    } catch (error) {
      console.error('Error fetching bundles:', error);
      res.status(500).json([]);
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
