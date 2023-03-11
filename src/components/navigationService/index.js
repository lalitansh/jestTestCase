import { NavigationActions,StackActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function navigateClearTop(rName, params) {
  // _navigator.dispatch(
  //   NavigationActions.navigate({
  //     routeName,
  //     params,
  //   })
  // );

	_navigator.dispatch(StackActions.reset({
	    index: 0,
	    actions: [NavigationActions.navigate({ routeName: rName})],
	  }));
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  navigateClearTop,
};
