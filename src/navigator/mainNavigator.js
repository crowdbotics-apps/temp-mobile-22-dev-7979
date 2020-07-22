import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen29213Navigator from '../features/BlankScreen29213/navigator';
import EmailAuth39212Navigator from '../features/EmailAuth39212/navigator';
import BlankScreen29210Navigator from '../features/BlankScreen29210/navigator';
import EmailAuth39209Navigator from '../features/EmailAuth39209/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen29213: { screen: BlankScreen29213Navigator },
EmailAuth39212: { screen: EmailAuth39212Navigator },
BlankScreen29210: { screen: BlankScreen29210Navigator },
EmailAuth39209: { screen: EmailAuth39209Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
