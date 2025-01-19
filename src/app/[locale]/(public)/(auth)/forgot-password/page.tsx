import { Metadata } from "next";
import ForgotPasswordPage from "./_components/ForgotPasswordPage";

type Props = {};

export const metadata: Metadata = {
  title: `Reset your password  `,
  description: "Reset",
};

const page = (props: Props) => {
  return <ForgotPasswordPage />;
};

export default page;
