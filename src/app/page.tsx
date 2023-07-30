"use client";
import Image from "next/image";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { auth } from "@/firebase/firebase";

export default function Home() {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }, []);
  return (
    <>
      <NavigationBar />
      <div>메인</div>
      <Footer />
    </>
  );
}
