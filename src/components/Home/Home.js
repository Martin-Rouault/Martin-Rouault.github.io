const Home = () => {
    return (
        <main>
        <section className="flex justify-center items-center">
          <div className="w-4/12">
            <h1 className="text-6xl font-semibold">Hello, my name is <span>Martin Rouault</span></h1>
            <p className="text-2xl text-slate-300 mt-4">
              I am a creative Developer based in Paris, France.
            </p>
          </div>
          <img src="../../IMG_1692.jpg" alt="myself" className="flex w-1/4 h-1/5 shadow-2xl rounded-full"></img>
        </section>
        <section className="p-12 mx-auto my-32 bg-slate-800 rounded-2xl w-4/5 border-solid border-2 border-zinc-600 shadow-2xl" id="skills">
        <div className="flex justify-around gap-24">
        <div className="">
          <h2 className="text-3xl font-semibold">Front-end</h2>
          <p className="text-lg text-slate-300 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 

          </p>
        </div>
        <div className="">
          <h2 className="text-3xl font-semibold">Back-end</h2>
          <p className="text-lg text-slate-300 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className="">
          <h2 className="text-3xl font-semibold">Other</h2>
          <p className="text-lg text-slate-300 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
      </div>
      </section>
        </main>
    );
};

export default Home;