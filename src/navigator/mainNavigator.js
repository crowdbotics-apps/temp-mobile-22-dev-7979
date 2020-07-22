import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen29219Navigator from '../features/BlankScreen29219/navigator';
import EmailAuth39218Navigator from '../features/EmailAuth39218/navigator';
import BlankScreen29216Navigator from '../features/BlankScreen29216/navigator';
import EmailAuth39215Navigator from '../features/EmailAuth39215/navigator';
import BlankScreen29213Navigator from '../features/BlankScreen29213/navigator';
import EmailAuth39212Navigator from '../features/EmailAuth39212/navigator';
import EmailAuth39209Navigator from '../features/EmailAuth39209/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen29219: { screen: BlankScreen29219Navigator },
EmailAuth39218: { screen: EmailAuth39218Navigator },
BlankScreen29216: { screen: BlankScreen29216Navigator },
EmailAuth39215: { screen: EmailAuth39215Navigator },
BlankScreen29213: { screen: BlankScreen29213Navigator },
EmailAuth39212: { screen: EmailAuth39212Navigator },
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
