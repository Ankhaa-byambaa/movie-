import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { MainCard } from "@/components/home/MainCard";
import { Title } from "@/components/home/Title";

export default function Page() {
  return (
    <>
      <Header />
      <Title />
      <div className="ml-20">
        <span className="w-full flex justify-between items-center mb-8 text-semibold text-[24px] ">
          More like this
          <div className="w-[120px] py-2 px-4 flex justify-center  items-center gap-2 text-[14px]">
            See more <img className="w-[16px] h-[16px] " src="icon1.svg" />
          </div>
        </span>
      </div>

      <Footer />
    </>
  );
}
