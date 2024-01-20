import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeMenu from "@/components/HomeMenu";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
        <Hero/>
        <HomeMenu/>
        <section className="text-center my-16">
          <SectionHeader subHeader={'Our story'} mainHeader={'About us'}/>
          <p className="max-w-md mx-auto mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non quasi corrupti aliquam quia explicabo veniam! Ut officia vel fugiat, iure voluptas minima eaque quibusdam recusandae quod eligendi a molestiae!</p>
        </section>
    </>
  )
}
