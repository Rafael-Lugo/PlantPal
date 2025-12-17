import { useRouter } from "next/router";
import useSWR from "swr";

export default function MyPlantsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading } = useSWR(`/api/plants/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if(!plant){
    return(
        <div>
            <h1>Not found</h1>
            <p>Plant not found.</p>
        </div>
    );
  }

  return (
    <div>
      <p>Plant {data.name}</p>
    </div>
  );
}
