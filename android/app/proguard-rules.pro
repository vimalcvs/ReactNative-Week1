# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# React Native
-keep class com.facebook.react.** { *; }
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.** { *; }

# Keep native methods
-keepclassmembers class * {
    native <methods>;
}

# Keep React Native classes
-keep class com.facebook.react.bridge.** { *; }
-keep class com.facebook.react.uimanager.** { *; }
-keep class com.facebook.react.views.** { *; }

# Keep JavaScript interface
-keepclassmembers,includedescriptorclasses class * { native <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactProp <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>; }

# Keep Hermes
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }

# Keep React Native Vector Icons
-keep class com.oblador.vectoricons.** { *; }

# Keep React Native Screens
-keep class com.swmansion.rnscreens.** { *; }

# Keep React Native Safe Area Context
-keep class com.th3rdwave.safeareacontext.** { *; }

# Keep React Native SVG
-keep class com.horcrux.svg.** { *; }

# Keep React Native Checkbox
-keep class com.reactnativecommunity.checkbox.** { *; }

# Keep React Native Vector Icons FontAwesome6
-keep class com.oblador.vectoricons.fontawesome6.** { *; }

# Keep React Native Vector Icons Evil Icons
-keep class com.oblador.vectoricons.evilicons.** { *; }

# Keep Sentry
-keep class io.sentry.** { *; }

# Keep your app's classes
-keep class com.reactnativeweek1.** { *; }

# Remove logging
-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
    public static *** w(...);
    public static *** e(...);
}

# Keep Parcelable classes
-keep class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# Keep Serializable classes
-keepnames class * implements java.io.Serializable
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    !static !transient <fields>;
    !private <fields>;
    !private <methods>;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

# Keep R8 full mode
-keepattributes *Annotation*
-keepattributes SourceFile,LineNumberTable
-keepattributes Signature
-keepattributes Exceptions

# Keep JavaScript interface
-keepclassmembers class * {
    @com.facebook.react.uimanager.annotations.ReactProp <methods>;
    @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>;
}

# Keep native methods
-keepclassmembers class * {
    native <methods>;
}

# Keep JavaScript interface
-keepclassmembers,includedescriptorclasses class * { native <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactProp <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>; }

# Keep Hermes
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }

# Keep React Native Vector Icons
-keep class com.oblador.vectoricons.** { *; }

# Keep React Native Screens
-keep class com.swmansion.rnscreens.** { *; }

# Keep React Native Safe Area Context
-keep class com.th3rdwave.safeareacontext.** { *; }

# Keep React Native SVG
-keep class com.horcrux.svg.** { *; }

# Keep React Native Checkbox
-keep class com.reactnativecommunity.checkbox.** { *; }

# Keep React Native Vector Icons FontAwesome6
-keep class com.oblador.vectoricons.fontawesome6.** { *; }

# Keep React Native Vector Icons Evil Icons
-keep class com.oblador.vectoricons.evilicons.** { *; }

# Keep Sentry
-keep class io.sentry.** { *; }

# Keep your app's classes
-keep class com.reactnativeweek1.** { *; }

# Remove logging
-assumenosideeffects class android.util.Log {
    public static *** d(...);
    public static *** v(...);
    public static *** i(...);
    public static *** w(...);
    public static *** e(...);
}

# Keep Parcelable classes
-keep class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# Keep Serializable classes
-keepnames class * implements java.io.Serializable
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    private static final java.io.ObjectStreamField[] serialPersistentFields;
    !static !transient <fields>;
    !private <fields>;
    !private <methods>;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

# Keep R8 full mode
-keepattributes *Annotation*
-keepattributes SourceFile,LineNumberTable
-keepattributes Signature
-keepattributes Exceptions
