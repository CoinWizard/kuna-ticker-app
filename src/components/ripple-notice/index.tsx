import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SpanText } from 'components/span-text';

export default () => (
    <View style={style.rippleNotice}>
        <SpanText style={{ textAlign: 'center', paddingBottom: 10 }}>💩💩💩💩💩</SpanText>

        <SpanText style={style.rippleNoticeText}>
            If you invest your own money in Ripple, I hope you know what you do 👌🏾
        </SpanText>
    </View>
);

const style = StyleSheet.create({
    rippleNotice: {
        marginLeft: 10,
        marginRight: 10,

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,

        borderRadius: 6,
        backgroundColor: '#FFFCEF',

        borderWidth: 0.5,
        borderColor: '#FFECA9',

        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
    },

    rippleNoticeText: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: '500',
        color: '#6F5D0B',
        textAlign: 'center',
    },
});
