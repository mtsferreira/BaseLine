import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%', 
        height: '100%'
    },
    drawerButton: {
        alignItems: 'flex-end', 
        marginTop: 75, 
        marginRight: 17,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'Poppins_400Regular',
        width: 225,
        margin: 30,
        borderBottomWidth: 1,
        borderColor: '#993399',
    },
    acceptButton: {
        width: 125,
        height: 25,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 90,
        borderRadius: 15,
        backgroundColor: '#c44ac4',
    },
    acceptText: {
        color: '#fff',
    },
});

export default styles;