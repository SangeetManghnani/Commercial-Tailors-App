import db from './firestoreSetup';

export function getCollections(collection) {
  return new Promise((resolve, reject) => {
    db.collection(collection).get().then((querySnapshot) => {
      const collectionItems = [];
      querySnapshot.forEach((doc) => {
        collectionItems.push(doc.data());
      });
      resolve(collectionItems);
    }).catch(err => reject(err));
  });
}
