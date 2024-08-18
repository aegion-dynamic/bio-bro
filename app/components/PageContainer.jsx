"use client";

const PageContainer = ({ name, children }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      {children}
    </div>
  );
};
export default PageContainer;
