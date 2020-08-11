import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#c44ac4',
        height: 190,
        marginLeft: 10,
        borderBottomLeftRadius: 10,
    },

    headerBackImg: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",
    },

    titleBlock: {
        width: '50%',
        marginTop: 70
    },

    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#fff',
        fontSize: 25,
        paddingBottom: 40
    },

    openItemButton: {
        alignSelf: 'center',
        paddingHorizontal: 85,
        borderTopWidth: 1,
        borderTopColor: '#D8079F',
    },

    itemContainer: {
        backgroundColor: '#D264A5',
        alignSelf: 'center',
        height: 150,
        width: '95%',
        borderRadius: 8,
        marginTop: 20,
        justifyContent: 'space-evenly',
    },
    
});

export default styles;