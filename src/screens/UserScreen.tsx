import { useContext } from 'react'
import { View, Text } from "react-native";
//resgatar valor da rota
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { UserContext } from '../contexts/userContext';

type UserScreenProps = {
    route: RouteProp<RootStackParamList, 'User'>
}

export default function UserScreen({ route }: UserScreenProps) {
    const { username } = route.params;
    const UserContextValue = useContext(UserContext);
    const nomeDinamico = UserContextValue?.loginName || 'Nenhum nome salvo';
    const nomeEstatico = UserContextValue?.nome || 'Nenhum'
    return (
        <View>
            <Text style={{ fontSize: 22 }}>Nome estático: {nomeEstatico}</Text>
            <Text style={{ fontSize: 22 }}>Nome dinâmico: {nomeDinamico}</Text>
        </View>
    )
}