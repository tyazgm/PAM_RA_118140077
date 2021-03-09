import React, { Component } from "react";
import { render } from "react-dom";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const [centi, setcenti] = useState(0);
const [inch, setinch] = useState(0);
const centitoinch = 0.393701;

function convertCentiToInch() {
  setinch(centi * centitoinch);
}

class ConvertApp extends Component{
  render(){
    return (
      <View style={styles.body}>
        <Text style={styles.title}>CM to INCH Converter</Text>
        <TextInput
          placeholder="Centimeter"
          style={styles.input}
          onChangeText={(value) => setcenti(value)}
          value={centi}
          keyboardType="numeric"
        />
        <Button style={styles.button} title="convert" onPress={convertCentiToInch} />
        <Text style={styles.result}>In inch is {inch}</Text>
      </View>
    );
  } 
}

function mapStateToProps(state) {
  return {
    inch: state.inch,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    convert: () => dispatch({ type: "CONVERT" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertApp);

const styles = StyleSheet.create({
  body: {
    margin: 30,
    marginTop: 100,
    padding: 24,
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10
  },
  input: {
    borderBottomWidth: 1,
    marginBottom:10
  },
  button: {
    margin: 100
  },
  result: {
    marginTop: 24,
    alignSelf: 'center'
  },
});

export default ConvertApp;
