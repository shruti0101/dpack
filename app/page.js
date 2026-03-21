import Hero from "@/components/Landingpage/Hero";
import Whychoose from "@/components/Landingpage/Whychoose";
import Industries from "@/components/Landingpage/Industries"
import AboutUs from "@/components/Landingpage/About";
import Products from "@/components/Landingpage/Products";

import Tabs from "@/components/Landingpage/Tabs"
import Trust from "@/components/Landingpage/Trust"
import Faq from "@/components/Landingpage/Faq";

import Cta from "@/components/Landingpage/Cta";
import ProductCategoriesSection from "@/components/Landingpage/Categories";
export default function Home() {
  return (
<>
<Hero></Hero>

<AboutUs></AboutUs>
<ProductCategoriesSection></ProductCategoriesSection>
<Products></Products>
<Whychoose></Whychoose>
{/* <Industries></Industries> */}

{/* <Trust></Trust> */}

<Tabs></Tabs>
<Cta></Cta>
<Faq></Faq>

</>
  );
}
