import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import AuthProvider from "@/context/AutContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: " %s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <AuthProvider>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}


// نکته:
// <clientComponent>
//   <serverComponent/>
// </clientComponent>

// 1. as a children :
// اگر توی کلاینت کامپوننت  => سرور کامپوننت رو ب صورت "بچه" بهش پاس بدی هرکدوم سرجاش میمونه و
// تغییر "نمیکنه" => ینی سرور کامپوننت داخل کلاینت کامپوننت , تبدیل ب کلاینت کامپوننت نمیشه

// 2.
// "ولی اگر سرور کامپوننت رو "مستقیما" ب کلاینت کامپوننت پاس بدی => ن بعنوان "بچه
//  دراین صورت اون سرور کامپوننت ب کلاینت کامپوننت تبدیل میشه 