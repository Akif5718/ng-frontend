import Header from "@/components/header/Header";
import Banner from "@/components/banner/banner";
import CircularCard from "@/components/banner/circular-card";

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center mx-auto max-w-screen-xl w-full px-4 md:px-8">
                <Banner />
            </div>
        </>
    );
}
