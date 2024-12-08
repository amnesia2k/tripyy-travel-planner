import { heroBG } from "@/assets";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative text-white h-screen flex items-center justify-center py-20">
      <div className="text-center px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-teal-500">
          Explore the World w<span className="lg:text-black dark:lg:text-white">it</span>h Trippy
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black lg:px-20 dark:text-yellow-100">
          Your ultimate travel companion. Whether you dream of serene beaches,
          bustling cityscapes, or breathtaking mountains, we’ve got you covered.
          Discover hand-picked destinations, build detailed itineraries, and
          make the most out of every adventure. Ready to dive into the
          experience of a lifetime? Start exploring today and let us guide you
          through the wonders of the world, one destination at a time.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/create-trip">
            <Button className="px-20 py-5 bg-teal-500 hover:bg-teal-600 text-white text-base font-bold md:text-lg md:font-extrabold uppercase rounded-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      <img
        src={heroBG}
        alt="Travel Background"
        className="absolute inset-0 w-full h-full object-contain opacity-100"
      />
    </div>
  );
};

export default HomePage;
