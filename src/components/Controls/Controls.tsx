import Builder from "./Builder/Builder";

const products = [
  {
    title: "product 1",
    type: "product 1",
  },
  {
    title: "product 2",
    type: "product 2",
  },
  {
    title: "product 3",
    type: "product 3",
  },
  {
    title: "product 4",
    type: "product 4",
  },
];

const Controls = () => {
  return (
    <div className="w-[50rem] bg-slate-300 flex flex-col items-center m-auto rounded py-8 shadow-1">
      {products.map((item, index) => {
        return <Builder key={index} title={item.title} />;
      })}
    </div>
  );
};

export default Controls;
