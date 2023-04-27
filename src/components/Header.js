import { Auth } from "./Auth";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="h1">Ciudad Sostenible</h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
