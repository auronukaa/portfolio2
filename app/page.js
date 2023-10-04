import Benefits from "@/components/benefits";
import Main from "@/components/main";
import Process from "@/components/process";
import YourProblems from "@/components/your-problems";

const Home = () => {
  return (
    <>
      <Main />
      <YourProblems />
      <Benefits />
      <div className="border-b border-neutral-800" />
      <Process />
      <div class="h-[100dvh]"></div>
      <div class="bg-grain"></div>
    </>
  );
};

export default Home;
