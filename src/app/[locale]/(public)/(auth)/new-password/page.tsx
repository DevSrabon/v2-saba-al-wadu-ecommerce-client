import { Metadata } from "next";
import ResetPassword from "./_components/NewPasswordPage";

export const metadata: Metadata = {
  title: `Provide new password  `,
  description: "description",
};

const page = () => {
  return <ResetPassword />;
};

export default page;
