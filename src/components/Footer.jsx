const Footer = () => {
  return (
    <footer className="py-20">
      <div className="w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4">
        <div>
          <h2 className="text-xl font-bold mb-2">About us</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, accusamus!</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Customer service</h2>
          <ul>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">Contact us</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">Faqs</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">Refunds</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Follow us</h2>
          <ul>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">Facebook</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">Youtube</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="#">Instagram</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Newsletter</h3>
          <p>Enter your email to get latest news</p>
          <form className="mt-4">
            <input type="email" placeholder="your email adress" className="p-2 w-full rounded-md text-gray-600 border" />
            <button className="mt-2 w-full p-2 bg-stone-800 rounded-md font-semibold text-white">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        <p>Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
