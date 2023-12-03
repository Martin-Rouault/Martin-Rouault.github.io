const Contact = () => {
  return (
    <>
      <div className="mb-14 border-solid border-2 border-zinc-600"></div>
      <div className="flex flex-col md:flex-row mb-14 justify-around items-center">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center md:text-left mb-4 md:mb-0">
          Interested in working together ?
        </p>
        <button
          className="btn text-sm md:text-md lg:text-lg xl:text-xl"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Contact me
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box p-6 md:p-8 lg:p-10">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              Send me an email right here
            </p>
            <form target="_blank" action="" method="POST">
              <input
                type="text"
                placeholder="Full name"
                className="input input-bordered mb-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="input input-bordered mb-4"
              />

              <textarea
                placeholder="Your message"
                name="message"
                id=""
                cols="30"
                rows="10"
                className="input input-bordered mb-4"
              ></textarea>
              <button type="submit" className="btn">
                Send
              </button>
            </form>

            <div className="modal-action mt-4">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="mb-14 border-solid border-2 border-zinc-600"></div>
    </>
  );
};

export default Contact;
