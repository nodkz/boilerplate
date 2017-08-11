import MongoClient from 'mongodb';

export default async () => {
  const db = await MongoClient.connect(process.env.DATABASE_URL);
  return { Users: db.collection('Users') };
};
