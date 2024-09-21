import { FaChartLine } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="py-20 bg-white/50">
      <div className="w-4/5 m-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div className="w-full md:w-1/3">
          <img className="w-full" src="" alt="" />
        </div>
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">Over 40.000</h1>
          <p className="md:text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            pariatur?
          </p>
          <div className="flex items-center">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-violet-300 text-violet-800">
                  <FaChartLine />
                </span>
                <h1>Data Validation</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi itaque voluptatum fugit amet, quasi vel?
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="p-3 rounded-full bg-violet-300 text-violet-800">
                  <FaChartLine />
                </span>
                <h1>Optimise Efficiency</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi itaque voluptatum fugit amet, quasi vel?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
