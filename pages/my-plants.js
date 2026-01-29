import { Subtitle, Titel, Title } from "@/styles";
import useSWR from "swr";
import { useSession, signIn } from "next-auth/react";
import PlantList from "@/components/Plantlist/PlantList";

export default function MyPlantsPage({ favoritePlantIds, toggleFavorite }) {
  const { status } = useSession();

  const shouldFetch = status === "authenticated";
  const { data, isLoading, error } = useSWR(shouldFetch ? "/api/plants" : null);

  if (status === "loading") {
    return <p>Checking session...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <Titel>My Plants</Titel>
        <Subtitle>Access denied</Subtitle>
        <p>You need to sign in to see your favorite plants.</p>
        <button type="button" onClick={() => signIn()}>
          Sign in
        </button>
      </>
    );
  }

  if (isLoading) return <p>Loading plants...</p>;
  if (error) return <p>Failed to load plants</p>;

  const favoritePlants = (data ?? []).filter((plant) =>
    favoritePlantIds.includes(plant._id)
  );

  return (
    <>
      <Titel>My Plants</Titel>

      {favoritePlants.length === 0 ? (
        <Subtitle>No favorites yet</Subtitle>
      ) : (
        <PlantList
          plants={favoritePlants}
          favoritePlantIds={favoritePlantIds}
          toggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
}
