function Header() {
  return (
    <header className="w-full bg-navbar border-b border-navbar-line">
      <nav className="max-w-340 mx-auto flex flex-wrap items-center justify-between gap-4 py-3 px-4 sm:px-6 lg:px-8">
        <div>
          <a href="#" className="font-semibold text-xl text-foreground">
            CheckCle App
          </a>
        </div>

        <div>
          <p className="font-semibold text-foreground">Hello Admin</p>
        </div>

        <div className="flex items-center gap-2">
          <a href="#" className="px-3 py-2 text-sm rounded-lg border">
            Sign in
          </a>

          <a
            href="#"
            className="px-3 py-2 text-sm rounded-lg bg-primary text-primary-foreground"
          >
            Get started
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
