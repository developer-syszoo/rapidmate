import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dropdown} from 'react-native-element-dropdown';
import {colors} from '../../colors';

const EnterpiseScheduleNewDetailsFill = ({navigation}) => {
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [promoEmails, setPromoEmails] = useState(false);
  const [dropdownCountryValue, setDropdownCountryValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayPress = day => {
    let updatedSelectedDays;

    if (selectedDays.includes(day)) {
      // If the day is already selected, remove it from the selectedDays array
      updatedSelectedDays = selectedDays.filter(
        selectedDay => selectedDay !== day,
      );
    } else {
      // If the day is not selected, add it to the selectedDays array
      updatedSelectedDays = [...selectedDays, day];
    }

    setSelectedDays(updatedSelectedDays);
  };

  const togglePromoEmails = () => {
    setPromoEmails(!promoEmails);
  };

  const data = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
  ];

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#FBFAF5'}}>
      <View style={{paddingHorizontal: 15, paddingTop: 8}}>
        <View>
          <View style={styles.locationAddress}>
            <View style={styles.locationCompanyCard}>
              <Ionicons name="location-outline" size={18} color="#000000" />
              <TextInput
                style={styles.loginput}
                placeholder="Enter pickup address"
                placeholderTextColor="#999"
                value={pickupAddress}
                onChangeText={text => setPickupAddress(text)}
              />
              <AntDesign name="arrowright" size={18} color="#000000" />
            </View>

            <View style={styles.borderDummy} />

            <View style={styles.locationCompanyCard}>
              <MaterialIcons name="my-location" size={18} color="#000000" />
              <TextInput
                style={styles.loginput}
                placeholder="Enter pickup address"
                placeholderTextColor="#999"
                value={dropAddress}
                onChangeText={text => setDropAddress(text)}
              />
              <AntDesign name="arrowright" size={18} color="#000000" />
            </View>
          </View>

          <View style={styles.datetimeCard}>
            <View style={{width: '50%', marginRight: 8}}>
              <Text style={styles.pickupDates}>Pickup date</Text>
              <View style={styles.nameInputDiv}>
                <TextInput
                  style={[styles.loginput, {fontFamily: 'Montserrat-Regular'}]}
                  placeholder="12/06/2024"
                  placeholderTextColor="#999"
                  value={date}
                  onChangeText={text => setDate(text)}
                />
                <AntDesign
                  name="calendar"
                  size={20}
                  color={colors.secondary}
                  style={{marginTop: 13}}
                />
              </View>
            </View>

            <View style={{width: '50%'}}>
              <Text style={styles.pickupDates}>Pickup time</Text>
              <View style={styles.nameInputDiv}>
                <TextInput
                  style={[styles.loginput, {fontFamily: 'Montserrat-Regular'}]}
                  placeholder="10:30 AM"
                  placeholderTextColor="#999"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
                <Ionicons
                  name="time-outline"
                  size={20}
                  color={colors.secondary}
                  style={{marginTop: 13}}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.addressCard}>
        <View style={styles.bookAddress}>
          <Text style={styles.cardTitle}>Repeat this order</Text>
          <TouchableOpacity onPress={togglePromoEmails}>
            <MaterialCommunityIcons
              name={promoEmails ? 'toggle-switch' : 'toggle-switch-off'}
              size={55}
              color={promoEmails ? '#FFC72B' : '#D3D3D3'}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.dailyCardMain}>
            <View style={styles.repeatdayCard}>
              <AntDesign name="retweet" size={20} color={colors.text} />
              <Text style={styles.repeatEvery}>Repeat every</Text>
            </View>
            <View style={styles.containerCity}>
              <Dropdown
                style={styles.dateDropdown}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? '1' : '1'}
                searchPlaceholder="Search.."
                value={dropdownCountryValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setDropdownCountryValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>

            <View style={styles.containerWeek}>
              <Dropdown
                style={styles.dateDropdown}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Week' : 'Week'}
                searchPlaceholder="Search.."
                value={dropdownCountryValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setDropdownCountryValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style={styles.untilDateCard}>
            <Text style={styles.untilDateText}>until</Text>
            <View style={styles.containeruntil}>
              <Dropdown
                style={styles.dateDropdown}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? '8/23/2024' : '8/23/2024'}
                searchPlaceholder="Search.."
                value={dropdownCountryValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setDropdownCountryValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <View style={styles.weekDaysMainCard}>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.weekDaysCard,
                  selectedDays.includes(day) && {backgroundColor: colors.secondary},
                ]}
                onPress={() => handleDayPress(day)}>
                <Text
                  style={[
                    styles.dayOfWeek,
                    selectedDays.includes(day) && styles.selectedText,
                  ]}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <Text style={styles.untilDayOccurs}>
              Occurs every day until{' '}
              <Text style={styles.untilDateOccurs}>August 23, 2024</Text>
            </Text>
          </View>
        </View>

        {promoEmails && (
          <View>
            <View style={styles.mainDateCard}>
              <TouchableOpacity style={styles.datesCards}>
                <FontAwesome
                  name="dot-circle-o"
                  size={25}
                  color={colors.secondary}
                />
                <Text style={styles.deliveryDates}>Daily</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.datesCards}>
                <FontAwesome name="circle-thin" size={20} color={colors.text} />
                <Text style={styles.deliveryDates}>Weekly</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.datesCards}>
                <FontAwesome name="circle-thin" size={20} color={colors.text} />
                <Text style={styles.deliveryDates}>Monthly</Text>
              </TouchableOpacity>
            </View>

            <View>
              <View style={styles.dailyCardMain}>
                <View style={styles.repeatdayCard}>
                  <AntDesign name="retweet" size={20} color={colors.text} />
                  <Text style={styles.repeatEvery}>Repeat every</Text>
                </View>
                <View style={styles.containerCity}>
                  <Dropdown
                    style={styles.dateDropdown}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? '1' : '1'}
                    searchPlaceholder="Search.."
                    value={dropdownCountryValue}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setDropdownCountryValue(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>

                <View style={styles.containerCity}>
                  <Dropdown
                    style={styles.dateDropdown}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Day' : 'Day'}
                    searchPlaceholder="Search.."
                    value={dropdownCountryValue}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setDropdownCountryValue(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>
              </View>

              <View style={styles.untilDateCard}>
                <Text style={styles.untilDateText}>until</Text>
                <View style={styles.containeruntil}>
                  <Dropdown
                    style={styles.dateDropdown}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? '8/23/2024' : '8/23/2024'}
                    searchPlaceholder="Search.."
                    value={dropdownCountryValue}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setDropdownCountryValue(item.value);
                      setIsFocus(false);
                    }}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.untilDayOccurs}>
                  Occurs every day until{' '}
                  <Text style={styles.untilDateOccurs}>August 23, 2024</Text>
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  informatinMainCard: {
    width: '32%',
    backgroundColor: colors.white,
    padding: 13,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 7,
    marginTop: 7,
    marginRight: 10,
  },
  informatinCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allInformatinCard: {
    flexDirection: 'row',
  },
  informationText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  bookingsInfo: {
    fontSize: 30,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  welcomeHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  userWelcome: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: colors.text,
  },
  aboutPage: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  deliveryRecently: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginBottom: 5,
  },
  recentlyInfo: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seAllText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.secondary,
  },
  packageDetailCard: {
    backgroundColor: colors.white,
    padding: 13,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 7,
    marginTop: 7,
    marginRight: 10,
  },
  packageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryTime: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 10,
  },
  packageMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 5,
  },
  fromLocation: {
    color: colors.subText,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 15,
  },
  Location: {
    color: colors.text,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  borderShow: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    width: '100%',
    marginVertical: 15,
  },
  orderId: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  valueMoney: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.secondary,
  },
  allDeleveryCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestPickup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 18,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 7,
    marginTop: 7,
    marginRight: 10,
  },
  franchiseCard: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 7,
    marginTop: 7,
    marginRight: 10,
  },
  packageRequst: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  packageDiscription: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
    marginVertical: 5,
  },
  requestPickupPack: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    paddingBottom: 20,
    paddingTop: 45,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 7,
    marginTop: 7,
    marginRight: 10,
  },
  pickcard: {
    width: '65%',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  packagePack: {
    width: '67%',
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 50,
  },
  specialDiscount: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF00580F',
    width: 80,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
    marginTop: 7,
  },
  discountPercentage: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.secondary,
    paddingLeft: 4,
  },
  packingCardImgas: {
    position: 'relative',
  },
  timingIcon: {
    position: 'absolute',
    top: '-10%',
    left: '30%',
  },
  companyLogoCard: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  companyInfo: {
    width: 80,
  },
  companyLogosImage: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  companyNames: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    paddingVertical: 5,
  },
  franchiseCardHeader: {
    width: '87%',
    marginLeft: 10,
  },
  franchiseStreet: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  bookedInfo: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  bookedDetails: {
    fontSize: 26,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  bookedCardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  companyLocation: {
    flexDirection: 'row',
  },
  nextBt: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 12,
    marginVertical: 20,
  },
  btnText: {
    color: colors.text,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  scheduleboard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  scheduleTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
    textAlign: 'center',
    marginVertical: 8,
  },
  scheduleSubTitle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
    textAlign: 'center',
  },
  schedulecard: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 80,
  },
  franchiseSubTitle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  locationCard: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  pickupaddressCard: {
    flexDirection: 'row',
    width: '100%',
  },
  addressCard: {
    backgroundColor: '#f4f3ee',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  loginput: {
    fontSize: 15,
    paddingHorizontal: 10,
    color: colors.text,
    width: '88%',
    fontFamily: 'Montserrat-Regular',
  },
  TextInputAddress: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
  },
  borderDummy: {
    borderWidth: 0.5,
    borderColor: '#DBDBDB',
    borderStyle: 'dashed',
    marginHorizontal: 9,
    width: '94%',
    marginVertical: 10,
  },
  locationAddress: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
  },
  locationCompanyCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameInputDiv: {
    backgroundColor: colors.white,
    width: '95%',
    flexDirection: 'row',
    borderRadius: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  pickupDates: {
    fontSize: 13,
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
    marginVertical: 5,
  },
  datetimeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  bookAddress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    flex: 1,
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
  },
  deliveryDates: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
    marginLeft: 5,
  },
  datesCards: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  mainDateCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  repeatEvery: {
    fontSize: 12,
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 10,
  },
  repeatdayCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  containerCity: {
    width: '20%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#FFF',
    marginRight: 20,
  },
  dateDropdown: {
    fontSize: 12,
    color: colors.text,
    fontFamily: 'Montserrat-Regular',
  },
  dailyCardMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  containeruntil: {
    width: '33%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#FFF',
    marginRight: 20,
  },
  untilDateCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  untilDateText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginHorizontal: 35,
  },
  untilDayOccurs: {
    fontSize: 12,
    color: colors.text,
    fontFamily: 'Montserrat-Regular',
    marginTop: 15,
  },
  untilDateOccurs: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    textDecorationLine: 'underline',
  },
  containerWeek: {
    width: '33%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#FFF',
    marginRight: 20,
  },
  weekDaysCard: {
    width: 35,
    height: 35,
    borderWidth: 0.5,
    borderColor: colors.text,
    borderRadius: 30,
    paddingLeft: 8,
    paddingTop: 7,
  },
  weekDaysMainCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  dayOfWeek: {
    fontSize: 12,
    color: colors.text,
    fontFamily: 'Montserrat-Regular',
  },
  selectedText: {
    color: colors.white,
  },
});

export default EnterpiseScheduleNewDetailsFill;
