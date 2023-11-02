
import "./Navbar.css";

const Navbar = ({highlight}) => {
  
  return (
    <div class="container">
      <input type="checkbox" id="burger-toggle" />
      <label for="burger-toggle" class="burger-menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
      <div class="menu">
        <div class="menu-inner">
          <ul class="menu-nav">
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="/">
                <span>
                  <div style={{ color: highlight === "home" ? "rgb(110, 255, 209)" : "" }}>Home</div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="/services">
                <span>
                  <div style={{ color: highlight === "services" ? "rgb(110, 255, 209)" : "" }}>
                    Services
                  </div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="/flashsale">
                <span>
                  <div style={{ color: highlight === "flashsale" ? "rgb(110, 255, 209)" : "" }}>
                    Flash Sale
                  </div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="/aboutus">
                <span>
                  <div style={{ color: highlight === "aboutus"? "rgb(110, 255, 209)" : "" }}>
                    About Us
                  </div>
                </span>
              </a>
            </li>
          </ul>
          <div class="gallery">
            <div class="title">
              <p>Our All-Time Best Selling Products</p>
            </div>
            <div class="images">
              <a class="image-link" href="/products/lipsticks">
                <div class="image" data-label="Velvet Rosewood Passionate Lip Color">
                  <img src="/images/lips.jpg" alt="" />
                </div>
              </a>
              <a class="image-link" href="/products/nailpolishes">
                <div class="image" data-label="Galactic Sapphire Shimmering White Nail Lacquer">
                  <img src="/images/nail.jpg" alt="" />
                </div>
              </a>
              <a class="image-link" href="/products/perfume">
                <div class="image" data-label="Enchanted Moonlit Gardenia Elixir">
                  <img src="/images/perfume.jpg" alt="" />
                </div>
              </a>
              <a class="image-link" href="/products/eyeliners">
                <div class="image" data-label="Starry Night Opulence Liquid Eyeliner">
                  <img src="/images/eyeliner.jpg" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
