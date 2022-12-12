import axios from 'axios';

// export const GetBranchListApiCall = async () => {
//   const res = await axios.get(`${apiPath}/branch/getBranchList`);
//   // if (res.status === 200) {
//   // }

//   return res.data;
// };

export default async function CategoryApiCall() {
  try {
    const response = await axios.get('http://localhost:3500/kategoriList');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
