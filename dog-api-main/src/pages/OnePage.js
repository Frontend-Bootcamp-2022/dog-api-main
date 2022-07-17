import axios from "axios";
import { useEffect, useState } from "react";

import Filter from "../components/Filter/Filter";
import Images from "../components/Images/Images";

const OnePage = () => {

  const [dogBreeds, setDogBreeds] = useState([]);
  const [dogImages, setDogImages] = useState([]);

  const fetchBreedData = async (breed) => {

    const data = await axios(`https://dog.ceo/api/breed/${breed}/images`).then(response => response.data.message)

    setDogImages(data)
  }

  const fetchBreedsData = async () => {
    const data = await axios("https://dog.ceo/api/breeds/list/all").then(response => Object.keys(response.data.message));

    setDogBreeds(data);
    return data;
  }

  useEffect(() => {
    fetchBreedsData();
  }, []);

  return (
    <div>
      <Filter data={dogBreeds} onSelectedBreed={fetchBreedData} />
      <Images data={dogImages} />
    </div>
  );
}

export default OnePage;
