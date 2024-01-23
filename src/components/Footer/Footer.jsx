const Footer = () => {
  
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="footer footer-center pt-10 pb-5">
        <aside className="text-xs md:text-sm">
          <p className="font-bold">
            Made with <span className="text-red-500">❤</span> by Martin Rouault
          </p>
          <p>Copyright © {date} - All right reserved</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
