import { useState, useEffect } from "react";
import { Hero } from "../components/hero";
import { useWorkData } from "../hooks/useWorkData";

export function Home() {

    const { data } = useWorkData();

    const [currentIndex, setCurrentIndex] = useState(0);

    if (data && data.length > 0) {

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
            }, 15000); // 15 segundos para mudar o hero

            return () => clearInterval(interval);
        }, [data.length]);

        const workData = data[currentIndex];

        return (
            <div className="w-auto h-[1920px] bg-white">
                {/* HERO */}
                <Hero
                    title={workData.title}
                    synopsis={workData.synopsis}
                    average={workData.averageGrade}
                    author={workData.author}
                    cover={workData.cover}
                    titleExibition={"Popular New Titles"}
                />
            </div>
        );
    } else {
        // Trate o caso em que não há dados ou o índice está fora dos limites
    }

}
