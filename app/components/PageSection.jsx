"use client";

const PageSection = ({ name, children }) => {
  return (
    <section>
      <h2 className="text-lg font-medium mb-2">{name}</h2>
      {children}
    </section>
  );
};
export default PageSection;
