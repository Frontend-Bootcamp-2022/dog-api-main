const Images = (props) => {

  const images = props.data.map(image => <img style={{ objectFit: "contain" }} width="200" height="200" src={image} key={image} />)

  return (
    <div>
      {images}
    </div>
  )
}

export default Images;