const Filter = (props) => {

  const options = props.data.map(option => <option key={option} value={option}>{option}</option>);

  const selectedBreed = (event) => {
    props.onSelectedBreed(event.target.value)
  }

  return (
    <select onChange={selectedBreed}>
      {options}
    </select>
  )
};

export default Filter;