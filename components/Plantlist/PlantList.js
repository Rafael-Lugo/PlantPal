import PlantCard from "./PlantCard";

export default function PlantList({ plants, isFavorite, toggleFavorite }) {
  return (
    <>
      <ul>
        <h2>Plant list</h2>
        {plants.map((plant) => (
          <li key={plant._id}>
            <PlantCard plant={plant} 
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}/>
          </li>
        ))}
      </ul>
    </>
  );
}
