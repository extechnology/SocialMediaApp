import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";


// Type for the language
type Language = "en" | "es" | "fr" | "de" | "ja" | "zh" | "hi" | "ml";


// Type for the context
type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    availableLanguages: { code: Language; name: string }[];
    t: (key: string) => string;
};


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);


const availableLanguages = [
    { code: "en" as Language, name: "English" },
    { code: "es" as Language, name: "Español" },
    { code: "fr" as Language, name: "Français" },
    { code: "de" as Language, name: "Deutsch" },
    { code: "ja" as Language, name: "日本語" },
    { code: "zh" as Language, name: "中文" },
    { code: "hi" as Language, name: "हिन्दी" },
    { code: "ml" as Language, name: "മലയാളം" }
];


// Simple translations for demo purposes
const translations: Record<Language, Record<string, string>> = {
    en: {
        "feed": "Feed",
        "people": "People",
        "new": "New",
        "post": "Post",
        "notifications": "Notifications",
        "profile": "Profile",
        "settings": "Settings",
        "language": "Language",
        "darkMode": "Dark mode",
        "notifications_setting": "Notifications",
        "privacy": "Privacy settings",
        "twoFactor": "Two-factor authentication",
        "autoplayVideos": "Autoplay videos",
        "dataUsage": "Data usage",
        "helpCenter": "Help center",
        "about": "About",
        "logout": "Logout",
        "account": "Account",
        "privacySecurity": "Privacy & Security",
        "appPreferences": "App Preferences",
        "support": "Support",
        "manageSetting": "Manage your account settings and preferences",
        "whoCanSee": "Manage who can see your content",
        "extraLayer": "Add an extra layer of security",
        "reduceData": "Reduce data consumption",
        "getHelp": "Get help with using the app",
        "version": "Version 1.0.0",
        "posting": "Posting...",
        "whatsOnMind": "What's on your mind?",
        "photo": "Photo",
        "share": "Share",
        "loadingImage": "Loading image..."
    },
    es: {
        "feed": "Noticias",
        "people": "Personas",
        "new": "Nuevo",
        "post": "Publicación",
        "notifications": "Notificaciones",
        "profile": "Perfil",
        "settings": "Configuración",
        "language": "Idioma",
        "darkMode": "Modo oscuro",
        "notifications_setting": "Notificaciones",
        "privacy": "Configuración de privacidad",
        "twoFactor": "Autenticación de dos factores",
        "autoplayVideos": "Reproducción automática",
        "dataUsage": "Uso de datos",
        "helpCenter": "Centro de ayuda",
        "about": "Acerca de",
        "logout": "Cerrar sesión",
        "account": "Cuenta",
        "privacySecurity": "Privacidad y seguridad",
        "appPreferences": "Preferencias de la aplicación",
        "support": "Soporte",
        "manageSetting": "Administra tu cuenta y preferencias",
        "whoCanSee": "Administra quién puede ver tu contenido",
        "extraLayer": "Añade una capa extra de seguridad",
        "reduceData": "Reduce el consumo de datos",
        "getHelp": "Obtén ayuda con el uso de la aplicación",
        "version": "Versión 1.0.0",
        "posting": "Publicando...",
        "whatsOnMind": "¿Qué estás pensando?",
        "photo": "Foto",
        "share": "Compartir",
        "loadingImage": "Cargando imagen..."
    },
    fr: {
        "feed": "Fil d'actualité",
        "people": "Personnes",
        "new": "Nouveau",
        "post": "Publication",
        "notifications": "Notifications",
        "profile": "Profil",
        "settings": "Paramètres",
        "language": "Langue",
        "darkMode": "Mode sombre",
        "notifications_setting": "Notifications",
        "privacy": "Paramètres de confidentialité",
        "twoFactor": "Authentification à deux facteurs",
        "autoplayVideos": "Lecture automatique",
        "dataUsage": "Utilisation des données",
        "helpCenter": "Centre d'aide",
        "about": "À propos",
        "logout": "Déconnexion",
        "account": "Compte",
        "privacySecurity": "Confidentialité et sécurité",
        "appPreferences": "Préférences de l'application",
        "support": "Support",
        "manageSetting": "Gérer les paramètres et préférences de votre compte",
        "whoCanSee": "Gérer qui peut voir votre contenu",
        "extraLayer": "Ajouter une couche supplémentaire de sécurité",
        "reduceData": "Réduire la consommation de données",
        "getHelp": "Obtenir de l'aide pour utiliser l'application",
        "version": "Version 1.0.0",
        "posting": "Publication en cours...",
        "whatsOnMind": "Qu'avez-vous en tête?",
        "photo": "Photo",
        "share": "Partager",
        "loadingImage": "Chargement de l'image..."
    },
    de: {
        "feed": "Feed",
        "people": "Personen",
        "new": "Neu",
        "post": "Beitrag",
        "notifications": "Benachrichtigungen",
        "profile": "Profil",
        "settings": "Einstellungen",
        "language": "Sprache",
        "darkMode": "Dunkler Modus",
        "notifications_setting": "Benachrichtigungen",
        "privacy": "Datenschutzeinstellungen",
        "twoFactor": "Zwei-Faktor-Authentifizierung",
        "autoplayVideos": "Videos automatisch abspielen",
        "dataUsage": "Datennutzung",
        "helpCenter": "Hilfecenter",
        "about": "Über",
        "logout": "Abmelden",
        "account": "Konto",
        "privacySecurity": "Datenschutz & Sicherheit",
        "appPreferences": "App-Einstellungen",
        "support": "Support",
        "manageSetting": "Verwalte deine Kontoeinstellungen und Präferenzen",
        "whoCanSee": "Verwalte, wer deine Inhalte sehen kann",
        "extraLayer": "Füge eine zusätzliche Sicherheitsebene hinzu",
        "reduceData": "Reduziere den Datenverbrauch",
        "getHelp": "Erhalte Hilfe bei der Nutzung der App",
        "version": "Version 1.0.0",
        "posting": "Wird gepostet...",
        "whatsOnMind": "Was gibt's Neues?",
        "photo": "Foto",
        "share": "Teilen",
        "loadingImage": "Bild wird geladen..."
    },
    ja: {
        "feed": "フィード",
        "people": "ユーザー",
        "new": "新規",
        "post": "投稿",
        "notifications": "通知",
        "profile": "プロフィール",
        "settings": "設定",
        "language": "言語",
        "darkMode": "ダークモード",
        "notifications_setting": "通知",
        "privacy": "プライバシー設定",
        "twoFactor": "二要素認証",
        "autoplayVideos": "動画の自動再生",
        "dataUsage": "データ使用量",
        "helpCenter": "ヘルプセンター",
        "about": "情報",
        "logout": "ログアウト",
        "account": "アカウント",
        "privacySecurity": "プライバシーとセキュリティ",
        "appPreferences": "アプリの設定",
        "support": "サポート",
        "manageSetting": "アカウント設定と環境設定を管理する",
        "whoCanSee": "コンテンツを見ることができる人を管理する",
        "extraLayer": "セキュリティの追加レイヤーを追加する",
        "reduceData": "データ消費量を削減する",
        "getHelp": "アプリの使用方法について助けを得る",
        "version": "バージョン 1.0.0",
        "posting": "投稿中...",
        "whatsOnMind": "何を考えていますか？",
        "photo": "写真",
        "share": "シェア",
        "loadingImage": "画像を読み込み中..."
    },
    zh: {
        "feed": "信息流",
        "people": "用户",
        "new": "新建",
        "post": "发布",
        "notifications": "通知",
        "profile": "个人资料",
        "settings": "设置",
        "language": "语言",
        "darkMode": "暗黑模式",
        "notifications_setting": "通知",
        "privacy": "隐私设置",
        "twoFactor": "双重认证",
        "autoplayVideos": "自动播放视频",
        "dataUsage": "数据使用",
        "helpCenter": "帮助中心",
        "about": "关于",
        "logout": "登出",
        "account": "账号",
        "privacySecurity": "隐私与安全",
        "appPreferences": "应用偏好",
        "support": "支持",
        "manageSetting": "管理账号设置和偏好",
        "whoCanSee": "管理谁可以看到你的内容",
        "extraLayer": "添加额外的安全层",
        "reduceData": "减少数据消耗",
        "getHelp": "获取使用应用的帮助",
        "version": "版本 1.0.0",
        "posting": "发布中...",
        "whatsOnMind": "你在想什么？",
        "photo": "照片",
        "share": "分享",
        "loadingImage": "加载图片中..."
    },
    hi: {
        "feed": "फ़ीड",
        "people": "लोग",
        "new": "नया",
        "post": "पोस्ट",
        "notifications": "सूचनाएँ",
        "profile": "प्रोफ़ाइल",
        "settings": "सेटिंग्स",
        "language": "भाषा",
        "darkMode": "डार्क मोड",
        "notifications_setting": "सूचनाएँ",
        "privacy": "गोपनीयता सेटिंग्स",
        "twoFactor": "दो-कारक प्रमाणीकरण",
        "autoplayVideos": "वीडियो स्वतः चलाएं",
        "dataUsage": "डेटा उपयोग",
        "helpCenter": "सहायता केंद्र",
        "about": "परिचय",
        "logout": "लॉग आउट",
        "account": "खाता",
        "privacySecurity": "गोपनीयता और सुरक्षा",
        "appPreferences": "ऐप प्राथमिकताएँ",
        "support": "सहायता",
        "manageSetting": "अपने खाते की सेटिंग्स और प्राथमिकताएँ प्रबंधित करें",
        "whoCanSee": "प्रबंधित करें कि आपकी सामग्री कौन देख सकता है",
        "extraLayer": "अतिरिक्त सुरक्षा परत जोड़ें",
        "reduceData": "डेटा खपत कम करें",
        "getHelp": "ऐप का उपयोग करने में मदद प्राप्त करें",
        "version": "संस्करण 1.0.0",
        "posting": "पोस्ट कर रहा है...",
        "whatsOnMind": "आप क्या सोच रहे हैं?",
        "photo": "फोटो",
        "share": "शेयर",
        "loadingImage": "छवि लोड हो रही है..."
    },
    ml: {
        "feed": "ഫീഡ്",
        "people": "ആളുകൾ",
        "new": "പുതിയത്",
        "post": "പോസ്റ്റ്",
        "notifications": "അറിയിപ്പുകൾ",
        "profile": "പ്രൊഫൈൽ",
        "settings": "ക്രമീകരണങ്ങൾ",
        "language": "ഭാഷ",
        "darkMode": "ഡാർക്ക് മോഡ്",
        "notifications_setting": "അറിയിപ്പുകൾ",
        "privacy": "സ്വകാര്യതാ ക്രമീകരണങ്ങൾ",
        "twoFactor": "ടു-ഫാക്ടർ ഓതന്റിക്കേഷൻ",
        "autoplayVideos": "വീഡിയോകൾ സ്വയമേവ പ്ലേ ചെയ്യുക",
        "dataUsage": "ഡാറ്റ ഉപയോഗം",
        "helpCenter": "സഹായ കേന്ദ്രം",
        "about": "കുറിച്ച്",
        "logout": "ലോഗ്ഔട്ട്",
        "account": "അക്കൗണ്ട്",
        "privacySecurity": "സ്വകാര്യത & സുരക്ഷ",
        "appPreferences": "ആപ്പ് മുൻഗണനകൾ",
        "support": "പിന്തുണ",
        "manageSetting": "നിങ്ങളുടെ അക്കൗണ്ട് ക്രമീകരണങ്ങളും മുൻഗണനകളും നിയന്ത്രിക്കുക",
        "whoCanSee": "നിങ്ങളുടെ ഉള്ളടക്കം ആർക്കൊക്കെ കാണാം എന്നത് നിയന്ത്രിക്കുക",
        "extraLayer": "കൂടുതൽ സുരക്ഷാ ലെയർ ചേർക്കുക",
        "reduceData": "ഡാറ്റ ഉപഭോഗം കുറയ്ക്കുക",
        "getHelp": "ആപ്പ് ഉപയോഗിക്കുന്നതിൽ സഹായം നേടുക",
        "version": "പതിപ്പ് 1.0.0",
        "posting": "പോസ്റ്റ് ചെയ്യുന്നു...",
        "whatsOnMind": "നിങ്ങളുടെ മനസിലുള്ളത് എന്താണ്?",
        "photo": "ഫോട്ടോ",
        "share": "ഷെയർ",
        "loadingImage": "ചിത്രം ലോഡുചെയ്യുന്നു..."
    }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {


    const [language, setLanguageState] = useState<Language>(() => {
        // Check for saved language
        const savedLanguage = localStorage.getItem("language") as Language | null;
        const browserLanguage = navigator.language.split('-')[0] as Language;
        // Default to English if browser language not supported
        const isSupported = availableLanguages.some(lang => lang.code === browserLanguage);
        return savedLanguage || (isSupported ? browserLanguage : "en");
    });


    // Set language
    const setLanguage = (newLanguage: Language) => {

        setLanguageState(newLanguage);

        toast("Language changed", { description: `Language has been changed to ${availableLanguages.find(l => l.code === newLanguage)?.name}` });
    
    };


    // Translation function
    const t = (key: string): string => {
        return translations[language]?.[key] || translations.en[key] || key;
    };



    useEffect(() => {
        // Update localStorage when language changes
        localStorage.setItem("language", language);
        // Here you would also update the app's translations
        document.documentElement.lang = language;
    }, [language]);


    return (
        <LanguageContext.Provider value={{ language, setLanguage, availableLanguages, t }}>
            {children}
        </LanguageContext.Provider>
    );


};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};