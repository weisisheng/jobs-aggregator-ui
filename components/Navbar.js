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
      <Link href={`/`}>
          <a style={styles.navLink}><strong>ESL Bot</strong></a>
        </Link>        <div style={{'flex':'1'}}></div>
        <Link href={`/about`}>
          <a style={styles.navLink}>About</a>
        </Link>
        <Link href={`http://forums.eslbot.com`}>
          <a target="_blank" style={styles.navLink}>Forums</a>
        </Link>
      </AppBar>
    </div>
  );
}

export default Navbar