import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getFindsById } from '../api/findData';
import FindCard from '../components/FindCard';
import { useAuth } from '../utils/context/authContext';
import SearchFinds from '../components/SearchBar';

function ShowFinds() {
  const [finds, setFinds] = useState([]);
  const [, setSearchQuery] = useState('');
  const [allFindData, setAllFindData] = useState([]);
  const { user } = useAuth();

  const getFindsByUser = () => {
    getFindsById(user.uid).then((data) => {
      setFinds(data);
      setAllFindData(data);
    });
  };

  useEffect(() => {
    getFindsByUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (query) => {
    const filteredFinds = allFindData.filter((find) => find.description.toLowerCase().includes(query.toLowerCase()));

    setFinds(filteredFinds);
    setSearchQuery('');
  };

  return (
    <div className="text-center my-4">
      <p>Find something?</p>
      <Link href="find/new" passHref>
        <Button className="green-btn" variant="btn btn-success">ADD THE FIND</Button>
      </Link>
      <p>to your collection</p>
      <div>
        <SearchFinds className="search-bar" onSearch={handleSearch} />
      </div>
      <div className="d-flex flex-wrap">
        {finds.map((find) => (
          <FindCard key={find.firebaseKey} findObj={find} onUpdate={getFindsByUser} />
        ))}
      </div>
    </div>
  );
}

export default ShowFinds;
