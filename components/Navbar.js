const styles = {
  navLeft: {
    textDecoration: 'none',
    fontSize: 18,
    padding:  '16px',
    color: '#0074D9',
    fontWeight: 'bold',
    float: 'left',
    pointer: 'none',
  },
  navRight: {
    textDecoration: 'none',
    fontSize: 18,
    padding:  '16px',
    color: '#0074D9',
    fontWeight: 'bold',
    float: 'right',
    cursor: 'pointer',
  },
  navBar: {
    backgroundColor: 'white',
    color: 'black',
    height: '50px',
    borderBottomColor: 'gray',
    borerBottomWidth: '1px',
    width: '100%',
  },
};

const Navbar = (props) => {
  return (
    <nav style={styles.navBar}>
      <a target="_blank" rel="noopener" style={styles.navLeft}>eslbot</a>
      <a href="https://forums.eslbot.com" target="_blank" rel="noopener" style={styles.navRight}>forums</a>
    </nav>
  );
}

export default Navbar