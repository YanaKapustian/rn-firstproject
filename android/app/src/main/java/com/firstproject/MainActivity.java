package com.firstproject;

import com.reactnativenavigation.NavigationActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle; 
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends NavigationActivity {
  // @Override
  //   protected String getMainComponentName() {
  //     return 'FirstProject';
  //   }
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
}
