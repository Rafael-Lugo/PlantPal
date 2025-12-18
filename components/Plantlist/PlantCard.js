import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function PlantCard({ plant, isFavorite, toggleFavorite }) {
  return (
    <li>
      <FavoriteButton isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
      <Link href={`/plants/${plant._id}`}>
        <article>
          <h2>{plant.name}</h2>
          {plant.botanicalName ? <p>{plant.botanicalName}</p> : null}
        </article>
      </Link>
    </li>
  );
}
