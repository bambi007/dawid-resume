import { StyleSheet, Font } from '@react-pdf/renderer';

import LibreFranklinLight from '../assets/fonts/LibreFranklin-Light.ttf';
import LibreFranklinMedium from '../assets/fonts/LibreFranklin-Medium.ttf';
import LibreFranklinBold from '../assets/fonts/LibreFranklin-Bold.ttf';

Font.register({
  family: 'LibreFranklinLight',
  src: LibreFranklinLight,
});

Font.register({
  family: 'LibreFranklinMedium',
  src: LibreFranklinMedium,
});

Font.register({
  family: 'LibreFranklinBold',
  src: LibreFranklinBold,
});

const styles = StyleSheet.create({
  page: {
    fontSize: 12,
    fontFamily: 'LibreFranklinMedium',
  },
  section: {
    margin: 20,
    marginBottom: 0,
    paddingTop: 20,
    borderTop: 2,
    borderStyle: 'dashed',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },

  contact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // textAlign: 'left',
    width: '60%',
  },

  sidebar: {
    width: '30%',

  },

  main: {
    width: '70%',
    paddingLeft: 20,
    borderLeft: 2,
    borderStyle: 'dashed',
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 120,
    border: 2,
  },

  name: {
    fontSize: 40,
    fontFamily: 'LibreFranklinBold'
  },

  uppercase: {
    textTransform: 'uppercase',
  },

  heading: {
    fontSize: 20,
    fontFamily: 'LibreFranklinBold'

  },

  skill: {
    color: 'white',
    backgroundColor: 'black',
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,

    margin: 5,
  },
  consent: {
    padding: 20,
    fontSize: 8,
    marginTop: 0,
    position: 'absolute',
    bottom: 0,
  }

});

export { styles }