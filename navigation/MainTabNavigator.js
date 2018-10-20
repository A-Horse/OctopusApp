// @flow
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import { TaskScreenContainer } from '../screens/TaskScreen';
import { TaskBoardScreenContainer } from '../screens/TaskBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { TodoScreenContainer } from '../screens/TodoScreen';
import { TodoBoxScreenContainer } from '../screens/TodoBoxScreen';
import { ProfileScreenContainer } from '../screens/ProfileScreen';
import { TaskCardDetailScreenContainer } from '../screens/TaskCardDetailScreen';
import { TaskCreaterScreenContainer } from '../screens/TaskCreaterScreen';

const TaskStack = createStackNavigator({
  Home: TaskScreenContainer,
  TaskBoard: TaskBoardScreenContainer,
  TaskCard: TaskCardDetailScreenContainer,
  TaskCreate: TaskCreaterScreenContainer
});

const TodoStack = createStackNavigator({
  TodoBox: TodoBoxScreenContainer,
  Todo: TodoScreenContainer
});

TodoStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Todo',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={'check-square'} />
  };
};

TaskStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Task',
    tabBarVisible,
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={'tasks'} />
  };
};

const SettingsStack = createStackNavigator({
  Profile: ProfileScreenContainer,
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={'user-circle'} />
  };
};

export default createBottomTabNavigator({
  TaskStack,
  TodoStack,
  SettingsStack
});
