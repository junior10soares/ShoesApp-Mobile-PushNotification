import OneSignal from 'react-native-onesignal';

export function tagUserInfoCreate() { //tag por email
    OneSignal.sendTags({
        'user_name': 'Junior',
        'user_email': 'edson.soares.jr@outlook.com'
    });
}

export function tagCartUpdate(itemsCount: string) {
    OneSignal.sendTag('cart_items_count', itemsCount)
}