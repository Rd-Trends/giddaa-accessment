const stats = [
  { title: "No of properties", value: 180 },
  { title: "No of units", value: 1800 },
  { title: "Plans/Methods you can purchase your home", value: 32 },
];

const Stats = () => {
  return (
    <div
      className={
        " container bg-light-accent-green flex items-center justify-center md:justify-around" +
        " space-x-4 [&>*:nth-child(3)]:mt-2 flex-wrap md:[&>*]:!m-0"
      }>
      {stats.map((stat, index) => (
        <div
          key={index}
          className=" w-[calc(50%-1rem)] md:w-fit text-center flex flex-col items-center space-y-0.5 py-4">
          <span className="text-primary text-4xl font-millik font-bold">
            {stat.value}
          </span>
          <span className="text-black text-sm font-medium uppercase">
            {stat.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
