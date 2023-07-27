import Image from "next/image";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div>메인</div>
      <Footer />
    </>
  );
}
