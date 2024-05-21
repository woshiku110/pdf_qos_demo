/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {DocumentView, RNPdftron} from '@pdftron/react-native-pdf';
type SectionProps = PropsWithChildren<{
  title: string;
}>;
const xml =
  '<?xml version="1.0" encoding="UTF-8" ?><xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve"><annots>[<highlight color="#FFFF00" opacity="1" creationdate="D:20240516080717Z" flags="print" date="D:20240516080717Z" name="93bdb2cb-8637-451b-88c9-f88ac7df9011" page="2" coords="181.748,383.8105,261.0105,383.8105,181.748,370.5005,261.0105,370.5005,268.7614,383.8105,540.0031,383.8105,268.7614,370.5005,540.0031,370.5005,117.828,371.8555,540.0031,371.8555,117.828,358.5455,540.0031,358.5455,86.944,359.9005,540.0032,359.9005,86.944,346.5905,540.0032,346.5905,86.944,347.9445,540.0032,347.9445,86.944,334.6345,540.0032,334.6345,117.828,335.9895,540.0031,335.9895,117.828,322.6795,540.0031,322.6795,117.828,324.0345,137.7532,324.0345,117.828,310.7245,137.7532,310.7245,117.828,312.0795,137.7532,312.0795,117.828,298.7695,137.7532,298.7695,117.828,300.1245,137.7532,300.1245,117.828,286.8145,137.7532,286.8145,162.6597,324.0345,540.0031,324.0345,162.6597,310.7245,540.0031,310.7245,162.6597,312.0795,236.1438,312.0795,162.6597,298.7695,236.1438,298.7695" rect="73.3464,286.8145,553.6008,383.8105" title="woshiku">\n\t\t\t<popup date="D:20240516080717Z" page="2" rect="73.3464,286.8145,553.6008,383.8105"/>\n\t\t\t<contents>and post-processing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 1.3.11 Specialized features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11\n1.4 LAMMPS non-features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 1.5 LAMMPS portability and compatibility . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 1.5.1\nProgramming language standards . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13\n1.5.2 1.5.3 1.5.4\nBuild systems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 Operating systems</contents>\n\t\t\t<apref blend-mode="multiply" y="383.8105" x="73.3464" gennum="256" objnum="35315"/>\n\t\t</highlight>, <highlight color="#FFFF00" opacity="1" creationdate="D:20240516080713Z" flags="print" date="D:20240516080713Z" name="a92e72ee-f238-4363-a2da-d0bec1faa180" page="2" coords="162.6498,515.3175,267.1774,515.3175,162.6498,502.0075,267.1774,502.0075,276.2334,515.3175,517.8165,515.3175,276.2334,502.0075,517.8165,502.0075,535.0219,515.3175,540.0032,515.3175,535.0219,502.0075,540.0032,502.0075,86.944,503.3625,193.5737,503.3625,86.944,490.0525,193.5737,490.0525,201.5139,503.3625,517.8165,503.3625,201.5139,490.0525,517.8165,490.0525,535.0219,503.3625,540.0032,503.3625,535.0219,490.0525,540.0032,490.0525,117.828,491.4075,137.7532,491.4075,117.828,478.0975,137.7532,478.0975,162.6597,491.4075,517.8164,491.4075,162.6597,478.0975,517.8164,478.0975,535.0218,491.4075,540.0031,491.4075,535.0218,478.0975,540.0031,478.0975,117.828,479.4515,137.7532,479.4515,117.828,466.1415,137.7532,466.1415,162.6597,479.4515,260.9407,479.4515,162.6597,466.1415,260.9407,466.1415,268.7614,479.4515,517.8164,479.4515,268.7614,466.1415,517.8164,466.1415,535.0218,479.4515,540.0031,479.4515,535.0218,466.1415,540.0031,466.1415,117.828,467.4965,137.7532,467.4965,117.828,454.1865,137.7532,454.1865,162.6597,467.4965,517.8164,467.4965,162.6597,454.1865,517.8164,454.1865,535.0218,467.4965,540.0031,467.4965,535.0218,454.1865,540.0031,454.1865,117.828,455.5415,517.8164,455.5415,117.828,442.2315,517.8164,442.2315,535.0218,455.5415,540.0031,455.5415,535.0218,442.2315,540.0031,442.2315,117.828,443.5865,137.7532,443.5865,117.828,430.2765,137.7532,430.2765,162.6597,443.5865,357.5182,443.5865,162.6597,430.2765,357.5182,430.2765,365.8967,443.5865,517.8164,443.5865,365.8967,430.2765,517.8164,430.2765,535.0218,443.5865,540.0031,443.5865,535.0218,430.2765,540.0031,430.2765,117.828,431.6315,137.7532,431.6315,117.828,418.3215,137.7532,418.3215,117.828,419.6765,137.7532,419.6765,117.828,406.3665,137.7532,406.3665,117.828,407.7205,137.7532,407.7205,117.828,394.4105,137.7532,394.4105,117.828,395.7655,137.7532,395.7655,117.828,382.4555,137.7532,382.4555,162.6597,431.6315,540.0031,431.6315,162.6597,418.3215,540.0031,418.3215,162.6597,419.6765,540.0031,419.6765,162.6597,406.3665,540.0031,406.3665,162.6597,407.7205,211.4764,407.7205,162.6597,394.4105,211.4764,394.4105" rect="83.7203,382.4555,551.3305,515.3175" title="woshiku">\n\t\t\t<popup date="D:20240516080713Z" page="2" rect="83.7203,382.4555,551.3305,515.3175"/>\n\t\t\t<contents>a LAMMPS version mean . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 1.3 LAMMPS features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 1.3.1\nGeneral features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7\n1.3.2 Particle and model types . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 1.3.3\nInteratomic potentials (force fields) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8\n1.3.4 Atom creation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 1.3.5\nEnsembles, constraints, and boundary conditions . . . . . . . . . . . . . . . . . . . . . 9\n1.3.6 1.3.7 1.3.8 1.3.9\nIntegrators . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 Diagnostics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 Output . . . </contents>\n\t\t\t<apref blend-mode="multiply" y="515.3175" x="83.7203" gennum="256" objnum="35309"/>\n\t\t</highlight>, <highlight color="#FFFF00" opacity="1" creationdate="D:20240516080727Z" flags="print" date="D:20240516080727Z" name="9c5b722a-0611-4d5b-8bad-239df4c9982d" page="2" coords="162.6597,276.2135,253.15,276.2135,162.6597,262.9035,253.15,262.9035,261.2894,276.2135,540.0031,276.2135,261.2894,262.9035,540.0031,262.9035,86.944,264.2585,211.078,264.2585,86.944,250.9485,211.078,250.9485" rect="83.1986,250.9485,548.3741,276.2135" title="woshiku">\n\t\t\t<popup date="D:20240516080727Z" page="2" rect="83.1986,250.9485,548.3741,276.2135"/>\n\t\t\t<contents>Portability compliance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14\n1.6 LAMMPS open-source</contents>\n\t\t\t<apref blend-mode="multiply" y="276.2135" x="83.1986" gennum="256" objnum="35327"/>\n\t\t</highlight>]</annots></xfdf>';
function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const pdfRef = useRef<DocumentView>(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    RNPdftron.initialize('Insert commercial license key here after purchase');
    RNPdftron.enableJavaScript(true);
  }, []);

  useEffect(() => {
    if (pdfRef.current) {
      const timer = setTimeout(() => {
        pdfRef.current?.importAnnotations(xml, true);
        timer && clearTimeout(timer);
      }, 200);
    }
  }, [pdfRef.current]);
  const path = 'android.resource://com.awesomeproject/raw/lamp.pdf';
  return (
    <DocumentView ref={pdfRef} document={path} showLeadingNavButton={true} />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default App;
