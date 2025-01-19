import { Metadata } from "next";
import LoginPage from "./_components/LoginPage";

export const metadata: Metadata = {
  title: `Login to your account  - Saba Al Wadu`,
  description: `We have borka that suits your style and which you’re proud to wear. For Women Only`,
};

const page = async () => {
  // const session = await auth();

  return <LoginPage />;
};

export default page;
