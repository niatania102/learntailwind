import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
  Nav,
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    {/* all the padding class is from directives in index.css file */}
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding ">
      <PopularProducts />
    </section>
    <section className="padding ">
      <SuperQuality />
    </section>
    <section className="padding-x py-10 ">
      <Services />
    </section>
    <section className="padding ">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding ">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 p-16 w-full ">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
