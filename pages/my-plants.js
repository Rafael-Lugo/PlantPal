import useSWR from "swr"

export default function MyPlantsPage(){
    const { data: myPlantstData } = useSWR("/api/plats");


    return(
        <>
                <h1>My Plants</h1>

        </>
        
    )
}