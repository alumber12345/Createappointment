import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Process the POST request
    const { name, email } = req.body;

    // Here you would typically handle the data, e.g., save it to a database
    console.log('Name:', name);
    console.log('Email:', email);

    // Send a response back to the client
    res.status(200).json({ message: 'Form data received successfully' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}