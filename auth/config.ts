const tenantName = "testadb2c123179"
const defaultUserFlow = "B2C_1_testUserFlow";

const authConfig = {
    clientId: "03c7404c-2aa1-47d2-a839-f8a1b6b3c203",
    redirectUrl: `authExApp://oauth/redirect/`, 
    // make sure to add 'manifestPlaceholders = [appAuthRedirectScheme: 'authExApp']' to your app's build.gradle file /android/app/build.gradle
    // under 'android' -> 'defaultConfig' -> 'manifestPlaceholders' NOT SURE what to do for iOS
    scopes: ["openid", "offline_access", "profile"],
    serviceConfiguration: {
        authorizationEndpoint: `https://testadb2c123179.b2clogin.com/testadb2c123179.onmicrosoft.com/b2c_1_testuserflow/oauth2/v2.0/authorize`,
        tokenEndpoint: `https://testadb2c123179.b2clogin.com/testadb2c123179.onmicrosoft.com/b2c_1_testuserflow/oauth2/v2.0/token`,
    }
};

export default authConfig;