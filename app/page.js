import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Main from "@/components/main";
import Process from "@/components/process";
import YourProblems from "@/components/your-problems";

const Home = () => {
  return (
    <>
      <Main />
      <YourProblems />
      <Process />
      <Faq />
      <Footer />
      <div class="bg-grain"></div>
    </>
  );
};

export default Home;
