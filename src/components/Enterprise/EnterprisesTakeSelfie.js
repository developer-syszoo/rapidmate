import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../colors';
import ChoosePhotoByCameraGallaryModal from '../commonComponent/ChoosePhotoByCameraGallaryModal';
import { handleCameraLaunchFunction, handleImageLibraryLaunchFunction } from '../../utils/common';

const EnterprisesTakeSelfie = ({ navigation }) => {
  const [isModalVisibleCamera, setModalVisibleCamera] = useState(false);
  const [photoFileName, setPhotoFileName] = useState(''); // State for filename
  const [photoUri, setPhotoUri] = useState(null); // State for photo URI

  const toggleModal = () => {
    setModalVisibleCamera(!isModalVisibleCamera);
  };

  const handlePhotoOpenClose = (visible) => {
    setModalVisibleCamera(!visible);
  };

  const handleCameraLaunch = async () => {
    setModalVisibleCamera(!isModalVisibleCamera);
    try {
      let cameraData = await handleCameraLaunchFunction();
      if (cameraData.status == 'success') {
        setPhotoFileName(getFileName(cameraData.data.uri));
        setPhotoUri(cameraData.data.uri);
      }
    } catch (error) {
      // Handle errors here
    }
  };

  const handleImageLibraryLaunch = async () => {
    setModalVisibleCamera(!isModalVisibleCamera);
    try {
      let imageData = await handleImageLibraryLaunchFunction();
      if (imageData.status == 'success') {
        setPhotoFileName(getFileName(imageData.data.uri));
        setPhotoUri(imageData.data.uri);
      }
    } catch (error) {
      // Handle errors here
    }
  };

  const getFileName = (uri) => {
    // Function to extract file name from URI
    if (uri) {
      const path = uri.split('/');
      return path[path.length - 1];
    }
    return '';
  };

  return (
    <ScrollView style={{ width: '100%', backgroundColor: '#FFF' }}>
      <View>
        <TouchableOpacity onPress={toggleModal} style={styles.profilePicCard}>
          <Image
            style={styles.profilePic}
            source={
              photoUri
                ? { uri: `file://${photoUri}` }
                : require('../../image/dummy-Selfie.jpg')
            }
          />
          <AntDesign
            style={styles.cameraIcon}
            name="camerao"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>

        <View style={styles.titlesCard}>
          <Text style={styles.statusTitle}>Please upload a Profile Picture</Text>
          <Text style={styles.statusSubtitle}>
            Please see if this looks good, you can try once more if you want to.
          </Text>
        </View>

        <View style={styles.buttonCard}>
          <TouchableOpacity onPress={toggleModal} style={styles.logbutton}>
            <Text style={styles.buttonText}>Try again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('EnterpriseThanksPage')}
            style={styles.saveBTn}>
            <Text style={styles.okButton}>Use this</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* -------------- Modal --------------------- */}
      <ChoosePhotoByCameraGallaryModal
        visible={isModalVisibleCamera}
        handlePhotoOpenClose={handlePhotoOpenClose}
        handleCameraLaunch={handleCameraLaunch}
        handleImageLibraryLaunch={handleImageLibraryLaunch}
      />
      {/* -------------- Modal --------------------- */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    width: 300,
    height: 300,
    borderRadius: 200,
  },
  profilePicCard: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  statusTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  statusSubtitle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.subText,
    textAlign: 'center',
  },
  titlesCard: {
    paddingHorizontal: '10%',
  },
  buttonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 30,
    marginTop: '30%',
  },
  logbutton: {
    width: '45%',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.text,
  },
  buttonText: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  okButton: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    color: colors.text,
  },
  saveBTn: {
    width: '45%',
    borderRadius: 8,
    padding: 15,
    backgroundColor: colors.primary,
  },
  cameraIcon: {
    position: 'absolute',
    top: '88%',
    left: '60%',
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: colors.primary,
    paddingTop: 6,
    paddingLeft: 8,
  },
});

export default EnterprisesTakeSelfie;
