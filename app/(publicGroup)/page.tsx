
import FAQSection from "./_components/home/FAQ";
import NewsSection from "./_components/home/NewsSection";


export default function Home() {
  return (
    <div className="space-y-20 md:space-y-28 px-4 py-10 sm:px-6 lg:px-8">
      <NewsSection/>
      <FAQSection/>
      
    </div>
  );
}
