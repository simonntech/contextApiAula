import { View, Text } from "react-native";
//resgatar valor da rota
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

type UserScreenProps = {
    route: RouteProp<RootStackParamList, 'User'>
}

export default function UserScreen({ route }: UserScreenProps) {
    const { username } = route.params

    return (
        <View>
            <Text>Bem vindo(a): {username}</Text>
        </View>
    )
}