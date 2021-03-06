import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { getAsset, KunaAsset, KunaAssetUnit } from 'kuna-sdk';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { _ } from 'utils/i18n';
import { ShadeScrollCard } from 'components/shade-navigator';
import Topic from 'components/topic';
import SpanText from 'components/span-text';

import styles from './select-asset.style';
import { Color } from 'styles/variables';
import { CoinIcon } from 'components/coin-icon';

export type SelectAssetParams = {
    title?: string;
    description?: string;
    emptyAsset?: boolean;
    assets?: KunaAssetUnit[];
    currentAsset?: KunaAssetUnit;
    onSelect: (newAsset: KunaAssetUnit | undefined) => void;
};

type SelectAssetProps
    = NavigationScreenProps<SelectAssetParams>;

export default class SelectAssetScreen extends React.PureComponent<SelectAssetProps> {
    public render(): JSX.Element {
        const { navigation } = this.props;
        const assets: Array<KunaAssetUnit | undefined> = navigation.getParam('assets') || [];

        const emptyAsset = navigation.getParam('emptyAsset') || false;

        const title = navigation.getParam('title') || _('choose-coin.title');
        const description = navigation.getParam('description') || undefined;

        const rowRenderer = this.__generateRowRenderer(assets.length);

        return (
            <ShadeScrollCard>
                <Topic title={title} description={description} />

                <View>
                    {emptyAsset ? rowRenderer(undefined, 0) : undefined}
                    {assets.map(rowRenderer)}
                </View>
            </ShadeScrollCard>
        );
    }


    private __generateRowRenderer(counter: number) {
        const { navigation } = this.props;
        const currentAsset = navigation.getParam('currentAsset') || undefined;

        return (asset: KunaAssetUnit | undefined, index: number) => {
            let coinAsset: KunaAsset | undefined;
            if (asset) {
                coinAsset = getAsset(asset);
            }

            return (
                <View key={index}>
                    <TouchableOpacity onPress={() => this.__onSelectAsset(asset)} style={styles.row}>
                        <View style={styles.coinInfo}>
                            {coinAsset ? (
                                <>
                                    <CoinIcon asset={coinAsset}
                                              withShadow={false}
                                              naked={true}
                                              style={styles.coinIcon}
                                              size={40}
                                    />
                                    <View style={styles.coinTitleBox}>
                                        <SpanText style={[styles.coinTitle, { fontWeight: 'bold' }]}>{coinAsset.key}</SpanText>
                                        <SpanText style={styles.coinTitle}> - {coinAsset.name}</SpanText>
                                    </View>
                                </>
                            ) : (
                                <>
                                    <SpanText style={[styles.coinTitle, styles.noCoinTitle]}>All coins</SpanText>
                                </>
                            )}
                        </View>

                        {asset === currentAsset ? (<Icon name="check" color={Color.Success} size={18} />) : undefined}
                    </TouchableOpacity>

                    {index < counter ? <View style={styles.separator} /> : undefined}
                </View>
            );
        };
    }


    private __onSelectAsset = (asset: KunaAssetUnit | undefined) => {
        const { navigation } = this.props;
        const onSelect = navigation.getParam('onSelect');

        if (onSelect && typeof onSelect === 'function') {
            onSelect(asset);
        }

        navigation.goBack();
    };
}


