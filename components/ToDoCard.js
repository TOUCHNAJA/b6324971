import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function ClassroomCard(props, { navigation }) {
  return (
    <View style={styles.card}>
      <View style={styles.namebox}>
        <Text style={styles.name} numberOfLines={2}>
          {props.name}
        </Text>
      </View>
      <View style={styles.timezoombox}>
        <View style={styles.timebox}>
          <Text numberOfLines={1} style={styles.time}>
            {props.time}
          </Text>
        </View>

        <Text>{props.place}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    margin: 5,
    padding: 7,
    flexDirection: 'column',
    elevation: 5,
    backgroundColor: 'aqua',
    borderWidth: 3,
  },
  card: {
    width: '100%',
    height: 110,
    margin: 5,
    padding: 7,
    flexDirection: 'column',
    backgroundColor: 'aqua',
    borderWidth: 3,
  },
  namebox: {
    width: '100%',
    height: '45%',
    justifyContent: 'center',
  },

  timezoombox: {
    width: '100%',
    height: '35%',
    flexDirection: 'row',
  },
  timebox: {
    width: '85%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  time: {
    color: 'black',
    fontSize: 14,
  },
});
