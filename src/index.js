// Allows you to import a whole directory
function importAll(r) {
  r.keys().forEach(r);
};
// import all images
importAll(require.context('./img/', true, /\.jpg$/));

import './styles.css';
