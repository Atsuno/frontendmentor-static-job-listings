const Header = () => (
  <header>
    <section className="bg-primary">
      <picture>
        <img
          className="block w-screen md:hidden"
          src="./images/bg-header-mobile.svg"
          alt="bg-header-mobile"
        />
        <img
          className="hidden w-screen md:block"
          src="./images/bg-header-desktop.svg"
          alt="bg-header-desktop"
        />
      </picture>
    </section>
  </header>
)

export default Header
