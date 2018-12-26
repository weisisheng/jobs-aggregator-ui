import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navLink: {
    textDecoration: 'none',
    fontSize: 16,
    padding: '10px',
    color: 'white',
    textShadow: '1px 1px 2px rgba(0,0,0, 0.5)'
  },
  icon: {
    textDecoration: 'none',
    fontSize: 24,
    padding: '10px',
    color: 'white',
    textShadow: '1px 1px 2px rgba(0,0,0, 0.5)'
  },
  navBar: {
    flexDirection: 'row',
    padding: 10,
    background: 'transparent',
    boxShadow: 'none'
  },
  homeNavBar: {
    flexDirection: 'row',
    padding: 10,
    background: '#0074D9',
    boxShadow: 'none'
  }
};

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div style={styles.root}>
      <AppBar style={!props.isHome ? styles.homeNavBar : styles.navBar} position="static">        
        <div style={{'flex':'1'}}></div>
        {/* <Link href={`/research`}>
          <a style={styles.navLink}>Some Link</a>
        </Link> */}
      </AppBar>
    </div>
  );
}

export default Navbar