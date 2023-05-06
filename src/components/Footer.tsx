const Footer = () => {
  return (
    <footer className="static bottom-0 h-110 w-full  bg-bggray text-black">
      <div className="container flex flex-col md:flex-row justify-between items-center m-auto">
        <div className="relative w-full md:w-1/2 h-110 flex justify-center items-center">
          <div className="absolute bottom-0 h-124 bg-image1 w-full mx-8"></div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-start px-10 mt-8 md:mt-20">
          <h2 className="text-4xl font-bold my-4">
            Lorem ipsum dolor sit consectetur
          </h2>
          <p className="text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
          <button className="rounded 3xl bg-black text-white p-6 mb-6 mt-4 font-medium w-44">
            Call to Action
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
