import s from "./SectionContainer.module.css";

const SectionContainer = ({ children, background }) => {
  return (
    <div
      style={background ? { background: background } : {}}
      className="py-14 bg-cover bg-no-repeat pt-40"
    >
      <div className={s.container}>{children}</div>
    </div>
  );
};

export default SectionContainer;
