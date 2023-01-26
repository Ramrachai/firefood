/* eslint-disable import/no-anonymous-default-export */
import { db } from "../firestore";

function getAllMenuItems() {
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
}

function getAllMenuCategories() {
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
}

function AddNewMenuItem(itemName, itemCategory, itemPrice) {
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
}

function UpateMenuItem(menuItemID, itemName, itemCategory, itemPrice) {
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
}

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

export default {
  getAllMenuItems,
  getAllMenuCategories,
  AddNewMenuItem,
  UpateMenuItem,
  DeleteMenuItem,
};
