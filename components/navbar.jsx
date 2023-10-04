import Container from "./container";

const links = [
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Offer",
  },
  {
    id: 3,
    title: "Process",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-center h-[40px] m-5 items-center">
      <Container>
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          .sitesculpting
        </span>
      </Container>
    </div>
  );
};

export default Navbar;
