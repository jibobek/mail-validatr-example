import type { NextApiRequest, NextApiResponse } from 'next';
import { validateEmail } from '../../../../mail-validatr/dist';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing email in request body.' });
  }

  try {
    const result = await validateEmail(email);
    return res.status(200).json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ error: 'Email validation failed.', details: error.message });
    } else {
      return res.status(500).json({ error: 'Email validation failed.' });
    }
  }
}
