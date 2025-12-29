import styled from "styled-components";
import PlantCard from "./PlantCard";

export default function PlantList({
  plants,
  favoritePlantIds,
  toggleFavorite,
}) {
  return (
    <PlantListWrapper>
      <h2>Plant list</h2>
      {plants.map((plant) => (
        <PlantListItem key={plant._id}>
          <PlantCard
            plant={plant}
            imageUrl={plant.imageUrl}
            isFavorite={favoritePlantIds.includes(plant._id)}
            toggleFavorite={toggleFavorite}
          />
        </PlantListItem>
      ))}
    </PlantListWrapper>
  );
}


export const PlantListWrapper = styled.section`
display: grid;
gap: 18px;
padding: 18px;
grid-template-columns: 1fr;
list-style: none;

background: var(--background);
color: var(--color);


@media (min-width: 520px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 900px) {
  grid-template-columns: repeat(3, 1fr);
}
`

const PlantListItem = styled.li`
list-style: none;
margin: 0;
padding: 0;
`