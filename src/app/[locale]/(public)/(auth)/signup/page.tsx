import { Metadata } from "next";
import SignupPage from "./_components/SignupPage";

export const metadata: Metadata = {
  title: `Create a new account  - `,
  description: "description",
};

const page = () => {
  return <SignupPage />;
};

export default page;
