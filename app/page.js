import Image from "next/image";
import Navbar from '@/components/Navbar';
import RuleBook from "@/pages/Rulebook/ruleBook";
import "./globals.css";

import Secratriat from "../pages/Secretariat/Secretariat";
import Faqs from "@/pages/Faqs/FAQS";

export default function Home() {
  return (
    <>
{/* <RuleBook/> */}
    <Secratriat />
    {/* <Faqs/> */}
    </>
  );
}
