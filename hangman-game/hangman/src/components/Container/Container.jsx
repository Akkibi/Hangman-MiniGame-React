import "./Container.css";

export const Container = ({ className, children }) => {
  return <div className={className + " container"}>{children}</div>;
};
