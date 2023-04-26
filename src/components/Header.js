import { Auth } from "./Auth";

export const Header = () => {
  return (
    <header>
      <h1 className="h1">Ciudad Sostenible</h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
