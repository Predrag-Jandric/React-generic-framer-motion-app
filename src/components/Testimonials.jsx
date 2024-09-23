const Testimonials = () => {
  const testimonialsData = [
    {
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "Jon Doe",
      position: "policeman",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, maiores. Ea similique beatae facere animi iste totam eligendi quidem sint?",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "Jon Doe",
      position: "policeman",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, maiores. Ea similique beatae facere animi iste totam eligendi quidem sint?",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "Jon Doe",
      position: "policeman",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, maiores. Ea similique beatae facere animi iste totam eligendi quidem sint?",
    },
  ];

  return (
    <div>
      <div>
        <h1>Client Reviews</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
          debitis iure nesciunt dicta, magni facilis officiis optio impedit
          exercitationem!
        </h2>

        <div>
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
              <div>
                <img src={testimonial.image} alt="" />
                <div>
                  <h1>{testimonial.name}</h1>
                  <p>{testimonial.position}</p>
                </div>
              </div>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
