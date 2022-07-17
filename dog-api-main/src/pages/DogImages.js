import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Images from "../components/Images/Images";

const DogImages = () => {

  const params = useParams();

  const [dogImages, setDogImages] = useState([]);

  const fetchBreedData = async (breed) => {

    const data = await axios(`https://dog.ceo/api/breed/${params.dogtype}/images`).then(response => response.data.message)

    setDogImages(data)
  }

  useEffect(() => {
    fetchBreedData();
  }, []);

  return (
    <div>
      <h1>DogImages</h1>
      <Images data={dogImages} />
    </div>
  )
}

export default DogImages