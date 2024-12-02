const Footer = () => {
  return (
    <div className="text-center">
      <div className="p-10">
        <h1 className="text-4xl font-bold">Gadget Heaven</h1>
        <br />
        <p className="text-2xl p-2">Landing the way in cutting-edge technology and innovation</p>
        <hr />
      </div>
      <footer className="footer bg-base-200 text-base-content p-10 flex flex-col items-center">
        <nav className="w-11/12 mx-auto flex justify-center">
          <div className="mx-4 flex flex-col gap-3">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </div>
          <div className="mx-4 flex flex-col gap-3">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Career</a>
          </div>
          <div className="mx-4 flex flex-col gap-3">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;