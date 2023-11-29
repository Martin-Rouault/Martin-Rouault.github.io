const Contact = () => {
  return (
    <>
      <div className="mb-20 border-solid border-2 border-zinc-600"></div>
      <div className="flex flex-row mb-20 mt-6 flex flex-row justify-around items-center">
        <p className="text-3xl font-semibold">
          Interested in working together ?
        </p>
        <button className="py-2 px-3 gap-4 flex border-solid border-2 border-zinc-700 rounded-full bg-slate-800 shadow-lg hover:transition duration-300 ease-in-out hover:bg-violet-600 hover:text-white hover:active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-slate-300 rounded-full">
          Contact me
        </button>
      </div>
    </>
  );
};

export default Contact;
