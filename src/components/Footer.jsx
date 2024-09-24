const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, accusamus!</p>
        </div>
        <div>
          <h2>Customer service</h2>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Faqs</a>
            </li>
            <li>
              <a href="#">Refunds</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Follow us</h2>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Newsletter</h3>
          <p>Enter your email to get latest news</p>
          <form >
            <input type="email" placeholder="your email adress" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>

      <div>
        <p>Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
