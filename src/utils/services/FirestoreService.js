import { db } from "../FirebaseConfig";

const getAllMenuItems = () => {
  return new Promise((resolve, reject) => {
    db.collection("menuItem")
      .get()
      .then((allMenuItems) => {
        resolve(allMenuItems);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const getAllMenuCategories = () => {
  return new Promise((resolve, reject) => {
    db.collection("menuCategory")
      .get()
      .then((allMenuCategories) => {
        resolve(allMenuCategories);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const AddNewMenuItem = (itemName, itemCategory, itemPrice) => {
  return new Promise((resolve, reject) => {
    const data = {
      itemName: itemName,
      itemCategory: itemCategory,
      itemPrice: parseFloat(itemPrice),
    };

    db.collection("menuItem")
      .add(data)
      .then((docRef) => {
        resolve(docRef);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const UpateMenuItem = (menuItemID, itemName, itemCategory, itemPrice) => {
  return new Promise((resolve, reject) => {
    const data = {
      itemName: itemName,
      itemCategory: itemCategory,
      itemPrice: parseFloat(itemPrice),
    };

    db.collection("menuItem")
      .doc(menuItemID)
      .update(data)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const DeleteMenuItem = (menuItemID) => {
  return new Promise((resolve, reject) => {
    db.collection("menuItem")
      .doc(menuItemID)
      .delete()
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const FirestoreService = {
  getAllMenuItems,
  getAllMenuCategories,
  AddNewMenuItem,
  UpateMenuItem,
  DeleteMenuItem,
};

export default FirestoreService;
