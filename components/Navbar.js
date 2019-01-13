const styles = {
  navLink: {
    textDecoration: 'none',
    fontSize: 18,
    padding:  '16px',
    color: 'gray',
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    position: 'fixed',
    top: 0,
    height: '50px',
    borderBottomColor: 'gray',
    borerBottomWidth: '1px',
    width: '100%',
  },
};

const Navbar = (props) => {
  return (
    <nav style={styles.navBar}>
      <a href="https://forums.eslbot.com" target="_blank" rel="noopener" style={styles.navLink}>forums</a>
    </nav>
  );
}

export default Navbar