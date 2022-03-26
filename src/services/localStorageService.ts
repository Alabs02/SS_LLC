import Crypt from './cryptService';

class Storage extends Crypt {
  getFromStore(key: string) {
    try {
      let payload: any = sessionStorage.getItem(key);
      return JSON.parse(payload);
    } catch (err) {
      console.error('Error getting item: ', err);
      return null;
    }
  }

  pushToStore(key: string, data: any) {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error('Error setting item: ', err);
      return false;
    }
  }

  deleteFromStore(key: string) {
    try {
      sessionStorage.removeItem(key);
      return true;
    } catch (err) {
      console.error('Error deleting item: ', err);
      return false;
    }
  }

  clearStorage() {
    try {
      sessionStorage.clear();
      return true;
    } catch (err) {
      console.error('Error clearing storage: ', err);
      return false;
    }
  }
}

export default new Storage();
