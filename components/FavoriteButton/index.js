export default function FavoriteButton({ _id, isFavorite, toggleFavorite }) {
  return (
    <button
      type="button"
      onClick={() => toggleFavorite(_id)}
      aria-label={isFavorite ? "unlike" : "like"}
      $isFavorite={isFavorite}
    ></button>
  );
}
