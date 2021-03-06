import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from "./SignIn";
import theme from '../theme';
import RepositoryView from "./RepositoryView";
import CreateReview from "./CreateReview";
import SignUp from './SignUp';
import UserReview from './UserReviews';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.greyBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path="/" exact>
          <RepositoryList/> 
        </Route>
        <Route path="/signin" exact>
          <SignIn/> 
        </Route>
        <Route path="/repo/:id" exact>
          <RepositoryView/>
        </Route>
        <Route path="/review" exact>
          <CreateReview/>
        </Route>
        <Route path="/signup" exact>
          <SignUp/>
        </Route>
        <Route path="/userreviews" exact>
          <UserReview/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </View>
  );
};

export default Main;