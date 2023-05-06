import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto w-100 flex flex-col mb-48">
        <section className="container flex flex-col text-center md:flex-row md:text-left">
          <div className="w-full md:w-1/2 flex flex-col	mt-20 h-110">
            <div className="w-full lg:w-2/3 mr-auto md:pr-4">
              <h1 className="text-5xl font-bold mb-0">
                Lorem ipsum dolor sit amet, consectetur
              </h1>
              <p className="text-lg mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="mt-4">
              <button className="rounded-lg bg-black px-6 py-2 text-lg font-medium text-white">
                Call to Action
              </button>
              <button className="rounded-lg bg-white border border-black px-6 py-2 text-lg font-medium text-black ml-4">
                See Workspace
              </button>
            </div>
          </div>
          <div className="w-full px-4 md:px-0 md:w-1/2 relative flex items-center mt-20 h-96">
            <div className="absolute w-4/5 h-full bottom-0 bg-image1 "></div>
            <div
              className="absolute w-2/5 right-0 h-60 bottom-0 bg-image2"
              style={{ top: '-50px' }}
            ></div>
          </div>
        </section>
        <section className="container flex flex-col md:flex-row text-center md:text-left mt-20 md:mt-32">
          <div className="w-full md:w-1/4 px-4 md:px-0 mb-8 md:mb-0 md:mr-4 flex flex-col pr-4">
            <h4>Header Text</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="w-full md:w-2/4 px-4 md:px-0 h-110 flex bg-bggray "></div>
          <div className="w-full md:w-1/4 px-4 md:px-0 mt-8 md:mt-0 md:ml-4 flex flex-col justify-end pl-4">
            <h4>Header Text</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
