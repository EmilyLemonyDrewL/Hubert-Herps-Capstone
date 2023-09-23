// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { Button } from 'react-bootstrap';
// import Link from 'next/link';
// import { getFindsById } from '../../api/findData';
// import FindCard from '../../components/FindCard';
// import { useAuth } from '../../utils/context/authContext';

// function SearchResult() {
//   const [findSearch, setFindSearch] = useState([]);
//   const { user } = useAuth();
//   const router = useRouter();
//   const { searchInput } = router.query;

//   const getSomeFinds = () => {
//     getFindsById(user.uid).then((findArray) => {
//       const filterFinds = findArray.filter((find) => find.description.toLowerCase().includes(searchInput));
//       setFindSearch(filterFinds);
//     });
//   };

//   useEffect(() => {
//     getSomeFinds();
//     return () => {
//       setFindSearch([]);
//     };
//   }, [getSomeFinds, searchInput]);

//   return (
//     <>
//       <div>
//         <div>
//           <Link href="/finds" passHref>
//             <Button className="green-btn" variant="success">Go back</Button>
//           </Link>
//         </div>
//         {findSearch.map((found) => <FindCard key={found.firebaseKey} findObj={found} onUpdate={getSomeFinds} />)}
//       </div>
//     </>
//   );
// }

// export default SearchResult;
