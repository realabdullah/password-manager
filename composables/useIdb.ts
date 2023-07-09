import { openDB } from "idb";

export const usePassword = () => {
  type Access = "readwrite" | "readonly";

  const dbPromise = openDB("smartpass", 1, {
    upgrade(db) {
      db.createObjectStore("smartpass", { keyPath: "id" });
      db.createObjectStore("category", { keyPath: "id" });
    },
  });

  // call smartpass DB
  const callDB = async (action: Access = "readwrite") => {
    const db = await dbPromise;
    const tx = db.transaction("smartpass", action);
    return tx.objectStore("smartpass") as any;
  };

  // call category DB
  const callCatDB = async (action: Access = "readwrite") => {
    const db = await dbPromise;
    const tx = db.transaction("category", action);
    return tx.objectStore("category") as any;
  };

  // add new password
  const addPassword = async (password: Password) => {
    const store = await callDB();
    return store.add(password);
  };

  // edit password
  const editPassword = async (password: Password) => {
    const store = await callDB();
    return store.put(password);
  };

  // delete password
  const deletePassword = async (id: string) => {
    const store = await callDB();
    return store.delete(id);
  };

  // get all passwords
  const getPasswords = async () => {
    const store = await callDB("readonly");
    return store.getAll();
  };

  //   get password by category
  const getPasswordsByCategory = async (category: string) => {
    const store = await callDB("readonly");
    const passwords = store.getAll();
    return passwords.filter(
      (password: Password) => password.category === category
    );
  };

  // add a category
  const addCategory = async (category: Category) => {
    const store = await callCatDB();
    store.add(category);
  };

  //   get all categories
  const getCategories = async () => {
    const store = await callCatDB();
    return store.getAll();
  };

  return {
    addPassword,
    editPassword,
    deletePassword,
    getPasswords,
    getPasswordsByCategory,
    addCategory,
    getCategories,
  };
};
