import { makeAutoObservable } from "mobx";
import axios from "axios";

class CategoryStore {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchData() {
    this.loading = true;
    try {
      const response = await axios.get("http://localhost:3500/kategoriList");
      this.data = response.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
}

export const store = new CategoryStore();



// // API çağrısını yapmak için:
// store.fetchData();

// // Çekilen verileri kullanmak için:
// console.log(store.data);

// import { makeAutoObservable } from 'mobx';
// import axios from 'axios';

// class CategoryStore {

//   constructor() {
//     makeAutoObservable(this);
//   }

//   GetCategoryList = async  function CategoryApiCall() {
//     try {
//       const response = await axios.get('http://localhost:3500/kategoriList');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

// export  const Category = new CategoryStore();
