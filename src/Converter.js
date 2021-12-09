import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Button} from 'react-native-elements';
import { TextInput } from 'react-native-paper';

function Converter() {

    const [selectedFrom, fromSelected] = useState();
    const [selectedTo, toSelected] = useState();
    const [amount, setText] =  useState();
    const [convertedValue, setConvertedValue]  = useState(0);

    function convertCurrency(amount, from, to){
        console.log('amount>> '+amount+' '+from+' '+to);
        let result =0;
        if(from =='usd' && to =='inr'){
            result =  (amount * 75.6182).toFixed(2)
            setConvertedValue(result);
        }else if(from =='ind' && to =='usd'){
            result =  (amount *0.0132296).toFixed(2)
            setConvertedValue(result);
        }else if(from =='usd' && to =='eur'){
            result = ( amount * 0.886045).toFixed(2)
            setConvertedValue(result);
        }else if(from =='eur' && to =='usd'){
            result =  (amount * 1.12861).toFixed(2)
            setConvertedValue(result);
        }else if(from =='ind' && to =='eur'){
            result =  (amount * 0.0117194).toFixed(2)
            setConvertedValue(result);
        }else if(from =='eur' && to =='ind'){
            result =  (amount * 85.3289).toFixed(2)
            setConvertedValue(result);
        }
    }

    return (
        <View>
            <Text style ={styles.sectionTitle} > Currency Converter</Text>
            {/* <Input placeholder="Enter Amount" /> */}

<View style = {styles.textInput}>
            <TextInput
                label="Enter an Amount"
                defaultValue={amount}
                onChangeText={amount => setText(amount)}
            /></View>
            <View style = {styles.textInput}>
            <Picker
                selectedValue={selectedFrom}
                onValueChange={(itemValue, itemIndex) =>
                    fromSelected(itemValue)
                }>
                <Picker.Item label="Select From" value="select" />
                <Picker.Item label="IND" value={"ind"} />
                <Picker.Item label="USD" value={"usd"} />
                <Picker.Item label="EUR" value={"eur"} />
            </Picker></View>
             <View style = {styles.textInput}>
            <Picker
                selectedValue={selectedTo}
                onValueChange={(itemValue, itemIndex) =>
                    toSelected(itemValue)
                }>
                <Picker.Item label="Select To" value="select" />
                <Picker.Item label="IND" value={"ind"} />
                <Picker.Item label="USD" value={"usd"} />
                <Picker.Item label="EUR" value={"eur"} />
            </Picker></View>

            <View style = {styles.buttonStyle}>
                <Button title="Convert"
                    //type="outline"
                    onPress={() => {
                        convertCurrency(amount, selectedFrom, selectedTo);
                    }}
                />

            </View>

            <Text style = {styles.resultTitle}>Converted Value : {convertedValue}</Text>


        </View>
    );
}
// style={styles}
//leftIcon={{ type: 'font-awesome', name: 'comment' }}
//    onChangeText={value => this.setState({ comment: value })
const styles = StyleSheet.create({
    textInput: {
      margin: '2%',
      padding:'2%'
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign:'center',
      margin:'2%'
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: '400',
        textAlign:'center',
        marginTop:'4%'
      },
    buttonStyle: {
      marginTop: 4,
      margin:'4%'
    },
    highlight: {
      fontWeight: '700',
    },
  });
  
export default Converter;