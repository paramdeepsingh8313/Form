import React, {useEffect, useState} from 'react';
import {
  Alert,
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
// import RNPickerSelect from 'react-native-picker-select';
// import Form from './src/Form/Form';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPswd, setConfirmPswd] = useState('');

  const [selected, setSelected] = React.useState('');

  const data = [
    {key: 'Jammu & Kashmir', value: 'Jammu & Kashmir'},
    {key: 'Punjab', value: 'Punjab'},
    {key: 'Haryana', value: 'Haryana'},
    {key: 'HP', value: 'HP'},
    {key: 'Delhi', value: 'Delhi'},
  ];

  const SubmitForm = () => {
    // Alert.alert('form submitted');

    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPswd === '' ||
      selected === ''
    ) {
      Alert.alert('Flieds are empty');
    } else if (password !== confirmPswd) {
      Alert.alert('retype the password');
    } else {
      Alert.alert('form submitted');
      const detail = `Name: ${name}  Email: ${email} Password: ${password} Confirm_Pswd: ${confirmPswd} Selected: ${selected} `;
      console.log(detail);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPswd('');
      setSelected('');
    }
  };

  // if (selected.length > 0) {
  //   Alert.alert(selected);
  // }

  return (
    <SafeAreaView>
      <View style={styles.Header}>
        <Text style={styles.FormHeader}>Form</Text>
      </View>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setName(e)}
            value={name}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setEmail(e)}
            value={email}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setPassword(e)}
            value={password}
            secureTextEntry={true}
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setConfirmPswd(e)}
            value={confirmPswd}
            secureTextEntry={true}
          />

          <Text style={styles.labelDesig}>Designation</Text>

          <SelectList
            setSelected={setSelected}
            data={data}
            boxStyles={{marginHorizontal: 10}}
            // onSelect={() => Alert.alert(selected)}
          />
          <View style={styles.btn}>
            <Button onPress={SubmitForm} title="Submit" />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    paddingTop: '5%',
    paddingHorizontal: '35%',
  },
  FormHeader: {
    fontSize: 40,
    fontWeight: '700',
    // paddingHorizontal: 50,
  },
  label: {
    marginHorizontal: 12,
    fontSize: 18,
    fontWeight: '600',
  },
  labelDesig: {
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  btn: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
});
