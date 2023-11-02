import { MdGrass } from "react-icons/md";
const Services = () => {
  const services = [
    {
      _id: "1",
      serviceName: "",
      serviceDetails:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab similique rem odio delectus, ipsam nobis officia. Enim, necessitatibus, aperiam aliquid est nisi velit eligendi, molestiae quam saepe maxime expedita. ",
      serviceIcon: <MdGrass></MdGrass>,
    },
    {
      _id: "2",
      serviceName: "s",
      serviceDetails:
        " Lorem ipsums dolor sit amet consectetur adipisicing elit. Non ab similique rem odio delectus, ipsam nobis officia. Enim, necessitatibus, aperiam aliquid est nisi velit eligendi, molestiae quam saepe maxime expedita. ",
      serviceIcon: <MdGrass></MdGrass>,
    },
  ];
  return (
    <section className="w-[90%] mx-auto mb-10">
      {/* ?title  */}
      <div>
        <h1 className="text-4xl font-bold text-center text-secondary">
          Our
          <span className="text-primary"> Service</span>
        </h1>
        <p className="text-xl font-bold text-center my-3 text-gray-900">
          A place to grow your garden
        </p>
        <p className="md:w-[50%] w-[90%] mx-auto text-center mb-14 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, vitae!
          Dolores minus sequi aspernatur! Pariatur officiis, ullam amet natus,ss
          veritatis quis cupiditate dolorem debitis aperiam porro numquam iste
          nihil officia.
        </p>
        <p>{icon}</p>
      </div>
      {/* services */}
      <div></div>
    </section>
  );
};

export default Services;
