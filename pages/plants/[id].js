import { useRouter } from "next/router";
import useSWR from "swr";

export default function MyPlantsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading } = useSWR(id ? `/api/plants/${id}` : null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!plant) {
    return (
      <div>
        <h1>Not found</h1>
        <p>Plant not found.</p>
      </div>
    );
  }

  return (
    <main>
      <h1>{plant.name}</h1>
      <p>{plant.botanicalName}</p>
      <ul>
        <li>Water: {plant.waterNeed}</li>
        <li>Light: {plant.lightNeed}</li>
      </ul>
    </main>
  );
}
