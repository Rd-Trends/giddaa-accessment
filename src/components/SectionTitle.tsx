const SectionTitle = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={
        "text-3xl font-millik text-primary font-bold relative w-fit" +
        " after:h-[2.5px] after:w-[70%] after:bg-primary after:block after:mx-auto " +
        className
      }>
      {title}
    </h2>
  );
};

export default SectionTitle;
