import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import './src/common/translations/appLocalize';

AppRegistry.registerComponent(appName, () => App);
