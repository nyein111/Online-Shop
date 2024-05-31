import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Wrapper from '../components/Wrapper/Wrapper';
import {Button, Icon} from 'react-native-elements';
import {user} from './user';

const UserProfile = () => {
  return (
    <Wrapper header={false}>
      <View style={styles.container}>
        <Image
          source={{uri: user.profilePicture}}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Edit Profile"
            icon={<Icon name="edit" type="material" color="white" />}
            buttonStyle={styles.button}
            onPress={() => {
              /* Add your edit profile logic here */
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  email: {
    fontSize: 20,
    color: '#555',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: 'pink',
  },
});
