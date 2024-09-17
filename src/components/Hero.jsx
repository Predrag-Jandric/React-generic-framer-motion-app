import { IoPlay } from "react-icons/io";

const Hero = () => {
  return (
    <section className="w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/2 space-y-6">
        <p>Innovation Requires Courage</p>
        <h1 className="text-5xl md:text-7xl font-bold">Lorem ipsum dolor sit.</h1>
        <p className="md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          aliquid, at optio eius provident ab qui ratione
        </p>
        <div>
          <button>Book</button>
          <button>
            <IoPlay />
            <span>Video</span>
          </button>
        </div>
      </div>

      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Hero;
