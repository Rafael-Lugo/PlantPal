import PlantList from "@/components/Plantlist/PlantList";

export default function HomePage() {
  return (
    <div>
      <h1>Plantpal App</h1>
      <PlantList plants={data} />
    </div>
  );
}
