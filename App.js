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
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

import DocumentPicker from 'react-native-document-picker';
// import RNPickerSelect from 'react-native-picker-select';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPswd, setConfirmPswd] = useState('');

  const [selected, setSelected] = React.useState('');

  const [singleFile, setSingleFile] = useState(null);

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

  const uploadImage = () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      console.log('dataaaaaaaaa', singleFile);

      // If file selected then create FormData
      // const fileToUpload = singleFile;
      // const data = new FormData();
      // data.append('name', 'Image Upload');
      // data.append('file_attachment', fileToUpload);

      // Please change file upload URL
      //   let res = await fetch(
      //     'http://localhost/upload.php',
      //     {
      //       method: 'post',
      //       body: data,
      //       headers: {
      //         'Content-Type': 'multipart/form-data; ',
      //       },
      //     }
      //   );
      //   let responseJson = await res.json();
      //   if (responseJson.status == 1) {
      //     alert('Upload Successful');
      //   }
      // } else {
      //   // If no file selected the show alert
      //   alert('Please Select File first');
      // }
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

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

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={selectFile}>
            <View style={styles.file}>
              <Text style={styles.buttonTextStyle}>Select File</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={uploadImage}>
            <View style={styles.file}>
              <Text style={styles.buttonTextStyle}>Upload File</Text>
            </View>
          </TouchableOpacity>

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
  buttonTextStyle: {
    color: 'Black',
    paddingVertical: 10,
    paddingHorizontal: '30%',
    fontSize: 16,
  },
  file: {
    marginBottom: 10,
    marginTop: 20,
    marginHorizontal: '20%',
    borderWidth: 1,
    borderRadius: 8,
  },
});
