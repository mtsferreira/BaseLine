import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderBottomEndRadius: 5,
        borderColor: '#c44ac4',
    },
    
    backgroundImg: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
    },

    profileName: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 25,
        marginLeft: 25,
        marginTop: 30,
        color: '#fff',
        maxWidth: 130
    },
    nickname: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 15,
        color: '#fff',
        paddingHorizontal: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginLeft: 25,
        maxWidth: 130
    },
});

export default styles;