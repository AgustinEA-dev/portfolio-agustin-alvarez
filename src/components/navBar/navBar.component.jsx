import { Link, Outlet } from "react-router";

export default function NavBar() {
  return (
    <>
      <nav style={styles.nav}>
        <Link className="logo" to={"/"} style={styles.li}>
          <div style={styles.logo}>AA-DEV</div>
        </Link>
        <ul style={styles.ul}>
          <Link to={"/proyects"} style={styles.li}>
            <li>Proyectos</li>
          </Link>
          <Link to={"/about"} style={styles.li}>
            <li>Sobre mi</li>
          </Link>
          <Link to={"/education"} style={styles.li}>
            <li>Educación</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

const styles = {
  nav: {
    position: "fixed",
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    gap: "70px",
    backgroundColor: "black",
    padding: "20px",
  },
  logo: {
    color: "white",
    padding: "0 0 0 20px ",
  },
  ul: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    listStyle: "none",
    color: "white",
  },
  li: {
    color: "white",
    textDecoration: "none",
  },
};
