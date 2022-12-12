// import { observable, action } from "mobx";
// import axios from "axios";

// class MyStore {
//   @observable data = null;
//   @observable error = null;
//   @observable loading = false;

//   @action
//   async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }




// import { observable } from "mobx";
// import axios from "axios";

// class MyStore {
//   @observable data = null;

//   async fetchData() {
//     const response = await axios.get("http://localhost:3500/kategoriList");
//     this.data = response.data;
//   }
// }


// import { observable } from 'mobx';
//  import axios from 'axios';
//  const API_URL = 'http://localhost:3500/kategoriList';
//  function MyStore() {
//   // @observable data = null;
//    // Veri çekme işlemi
//    const fetchData=()=> {
//      axios.get('http://localhost:3500/kategoriList').then(response => {
//        //this.data = response.data;
//        console.log(response.data)
//      }).catch(err => {
//          console.log(err)
//      });
//    }
//     return (
//      fetchData()
//    );
//   //  return (
//   //    <><button onClick={fetchData}>sdggfg</button></>
//   //  );
//  }
//  //const store = new MyStore();
//  export default MyStore;



// // dosya: store.js
// import { observable } from 'mobx';
// import axios from 'axios';

// const API_URL = 'http://localhost:3500/kategoriList';

// class MyStore {
//  // @observable data = null;

//   // Veri çekme işlemi
//   fetchData() {
//     axios.get(API_URL).then(response => {
//       //this.data = response.data;
//       console.log(response);
//     }).catch(err=> {
//         console.log(err);
//     });
//   }
// }

// const store = new MyStore();

// export default store;




// import { observable } from "mobx";

// class DataStore {
//   @observable data = [];

//   constructor() {
//     this.fetchData();
//   }

//   fetchData() {
//     // Use Axios to fetch data from the API
//     // and save the response in the "data" property
//   }
// }

// export default new DataStore();





// dosya: store.js
//import { observable } from 'mobx';
// import axios from 'axios';

// const API_URL = 'http://localhost:3500/kategoriList';

// function MyStore() {
//  // @observable data = null;

//   // Veri çekme işlemi
//   const fetchData=()=> {
//     axios.get('http://localhost:3500/kategoriList').then(response => {
//       //this.data = response.data;
//       console.log(response.data)
//     }).catch(err => {
//         console.log(err)
//     });
//   }
//   return (
//     <><button onClick={fetchData}>sdggfg</button></>
//   );
// }

// //const store = new MyStore();

// export default MyStore;l

