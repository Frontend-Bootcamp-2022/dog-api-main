import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Filter from "../components/Filter/Filter";

const Home = () => {

  const navigate = useNavigate();

  const [dogBreeds, setDogBreeds] = useState([]);

  const fetchBreedsData = async () => {
    const data = await axios("https://dog.ceo/api/breeds/list/all").then(response => Object.keys(response.data.message));

    setDogBreeds(data);
    return data;
  }

  const redirectDetail = (breed) => {
    navigate(`/dog/${breed}`, { replace: true })
  }

  useEffect(() => {
    fetchBreedsData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Filter data={dogBreeds} onSelectedBreed={redirectDetail} />
    </div>
  )
}

export default Home