import React from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import SvgIcon from 'react-native-svg-icon';
import { KunaAsset } from 'kuna-sdk';

import { svgIcons, findIcon } from './svg-icons';
import { coinShadow } from 'styles/shadows';
import Icon from 'components/icon';
import { SpanText } from 'components/span-text';
import { DefaultStyles } from 'styles/variables';

type CoinIconProps = {
    asset: KunaAsset;

    withShadow?: boolean;
    naked?: boolean;
    size?: number;
    style?: StyleProp<ViewStyle>;
};

export function CoinIcon(props: CoinIconProps): JSX.Element {
    const { size = 32, withShadow = true, asset, naked = false, style = {} } = props;

    const coinIconStyle = {
        height: size,
        width: size,
    };

    const svgShapeStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
    };

    const existsIcon = findIcon(asset);

    const backgroundLayout = naked
        ? undefined
        : <Icon name="shapeBox" size={size} style={svgShapeStyle} fill={asset.color} />;

    if (!existsIcon) {
        const symbolContainerStyle: any = {
            width: size,
            height: size,
            fontSize: size * 0.625,
            lineHeight: size,
            textAlign: 'center',
        };

        const iconStyle = StyleSheet.flatten([
            styles.onlySymbolText,
            { color: naked ? asset.color : '#FFFFFF' },
            symbolContainerStyle,
        ]);

        return (
            <View style={[coinIconStyle, withShadow ? coinShadow : {}, style]}>
                {backgroundLayout}
                <SpanText style={iconStyle}>{asset.name.charAt(0).toUpperCase()}</SpanText>
            </View>
        );
    }

    const svgShapeIconStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
    };

    return (
        <View style={[coinIconStyle, withShadow ? coinShadow : {}, style]}>
            {backgroundLayout}
            <SvgIcon svgs={svgIcons}
                     name={asset.key as string}
                     width={size}
                     height={size}
                     fill={naked ? asset.color : '#FFFFFF'}
                     style={svgShapeIconStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    onlySymbolView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    onlySymbolText: {
        ...DefaultStyles.boldFont,
        position: 'absolute',
        top: 1,
        left: 0
    },
});
