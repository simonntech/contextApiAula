import { useState, useContext } from 'react'
import { View, Text, TextInput, Button } from "react-native";

//criar propriedade para o navegador
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

import { UserContext } from '../contexts/userContext';

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>
}

export default function HomeScreen({ navigation }: HomeScreenProps) {

    const [inputText, setInputText] = useState('');
    const userContext = useContext(UserContext);

    const navigateToUserScreen = () => {
        userContext?.save(inputText);
        navigation.navigate('User', { username: inputText });
    }

    return (
        <View>
            <TextInput
                placeholder="Digite seu nome..."
                value={inputText}
                onChangeText={(text) => setInputText(text)}
            />
            <Button
                title='Logar'
                onPress={navigateToUserScreen}
            />
        </View>
    )
}