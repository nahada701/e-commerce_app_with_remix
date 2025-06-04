// db.ts
import { openDB } from 'idb';

const STORE_NAME = 'products';

export const initDB = async () => {
  return await openDB('EcommerceDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

export const saveToIndexedDB = async (data: any) => {
  const db = await initDB();
  await db.put(STORE_NAME, data, 'data');
};

export const getFromIndexedDB = async () => {
  const db = await initDB();
  return await db.get(STORE_NAME, 'data');
};
