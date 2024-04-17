import { Hero } from "../components/hero";
import { useWorkData } from "../hooks/useWorkData";
import { WorkData } from "../interface/WorkData";

export default function Home() {
    const { data } = useWorkData();

    return (
        <div className="w-auto h-[1920px] bg-white dark:bg-zinc-900 ">
            {/* HERO */}
            {data?.map(workData =>
                <Hero
                    title={workData.title}
                    listGenres={workData.listGenres}
                    synopsis={workData.synopsis}
                    average={workData.average}
                    author={workData.author}
                    cover={workData.cover}
                    titleExibition={"Popular New Titles"}
                />)}
        </div>


    );
}
