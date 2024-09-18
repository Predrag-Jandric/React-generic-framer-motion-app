import { div } from "framer-motion/client";
import { SiDatabricks, SiGoogleassistant } from "react-icons/si";

const Insights = () => {
  const insightsData = [
    {
      title: "Productivity Enhancer",
      date: "July 2023",
      icon: SiGoogleassistant,
      description: "Dynamic visibility tools built to drive engagement.",
    },
    {
      title: "Remote Assistance",
      date: "Oct 2024",
      icon: SiDatabricks,
      description: "Dynamic visibility tools built to drive engagement.",
    },
  ];

  return (
    <section>
      <div>
        <h2>Industry Insights</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          corporis alias amet ab sint provident quos vel.{" "}
        </p>
        <div>
          <img
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1726617600&semt=ais_hybrid"
            alt=""
          />
          <div>
            <h1>Michael Runer</h1>
            <p>CEO, founder</p>
          </div>
        </div>
      </div>

      <div>
        {insightsData.map((insight, index) => (
          <div key={index}>
            <div>
              <div>
                <button>{insight.icon()}</button>
                <h1>{insight.title}</h1>
              </div>
              <p>{insight.date}</p>
            </div>
            <p>{insight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
