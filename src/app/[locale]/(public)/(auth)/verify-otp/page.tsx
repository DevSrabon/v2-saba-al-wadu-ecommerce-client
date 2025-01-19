import { Metadata } from "next";
import VerifyOtp from "./_components/VerifyOtp";

type Props = {};

export const metadata: Metadata = {
  title: `Verify your otp  - `,
  description: "",
};

const page = (props: Props) => {
  return <VerifyOtp />;
};

export default page;
