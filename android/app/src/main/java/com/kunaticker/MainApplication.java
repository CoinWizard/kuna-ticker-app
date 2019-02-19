package com.kunaticker;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.rnds.DirectedScrollViewPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.reactcommunity.rnlanguages.RNLanguagesPackage;
import com.horcrux.svg.SvgPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.bitgo.randombytes.RandomBytesPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.config.RNFirebaseRemoteConfigPackage;
import io.invertase.firebase.admob.RNFirebaseAdMobPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.bitgo.randombytes.RandomBytesPackage;
import com.horcrux.svg.SvgPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new DirectedScrollViewPackage(),
            new RNGestureHandlerPackage(),
                    new RNLanguagesPackage(),
                    new RNFirebasePackage(),
                    new RNFirebaseAnalyticsPackage(),
                    new RNFirebaseRemoteConfigPackage(),
                    new RNFirebaseAdMobPackage(),
                    new RNDeviceInfo(),
                    new SvgPackage(),
                    new RandomBytesPackage(),
                    new SplashScreenReactPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
