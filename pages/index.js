// Translation
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Layout
import Normal from "@/components/layouts/Normal";
// Others
import SmoothScroll from "@/components/layouts/SmoothScroll";
import Image from "next/image";
import useAppIcons from "@/hooks/useAppIcons";
import Link from "next/link";

export default function Home() {
  const { jumbotronImage, doubleArrow, store, coin } = useAppIcons();

  // Handle Scroll To Saved
  const scrollToTarget = () => {
    // Package URL for scroll to element
    // https://www.npmjs.com/package/scroll-into-view
    const targetElement = document.getElementById(`submit`);
    console.log(targetElement);
    var scrollIntoView = require("scroll-into-view");
    scrollIntoView(targetElement, {
      align: {
        top: 0.2,
      },
    });
  };

  return (
    <>
      {/* <SmoothScroll style={{ height: '100vh', overflowY: 'auto' }}> */}
      <div className="relative overflow-hidden">
        {/* Start Jumbotron */}
        <section >
          <div className={`jumbotron relative h-[100vh] text-white flex justify-center items-center`} id="jumbotron">
            <span className={`white-circle w-[900px] h-[900px] absolute -right-[10%] -top-[40%]`}></span>
            {/* <Image src={jumbotronImage} className="w-full h-full object-cover absolute bottom-0 left-0 z-10" /> */}
            <div className={`container z-20`}>
              <h1 className={`text-6xl lg:text-9xl w-full text-center font-extrabold`} data-aos="zoom-out" data-aos-duration="1000">Destiny Calls</h1>
              <h3 className={`text-4xl lg:text-6xl w-full text-center my-8 font-bold`} data-aos="zoom-out" data-aos-duration="1500">Accelerator Program Overview</h3>
              <div className="w-full flex justify-center items-center pt-10">
                <div className={`rounded-2xl p-2 button-back`} data-aos="zoom-out" data-aos-duration="2000">
                  <button onClick={scrollToTarget} className={`bg-[var(--secondary-color)] rounded-xl px-14 py-2 font-extrabold`}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div >
        </section >
        {/* End Jumbotron */}

        {/* Start Other Parts */}
        <section className="pb-32">
          <div className={`other-parts relative text-white`} id="other-parts">
            <div className={`container z-20`}>
              <p className={`text-xl w-full text-justify mb-8`} data-aos="fade-up"
                data-aos-duration="1000">The Destiny Calls Program integrates Elastos' Bitcoin's Layer 2 technologies with decentralized Smart Web infrastructure to boost Web3 ecosystem growth, focusing on user empowerment and equity. Leveraging innovations like BeL2, EVM smart contracts, and identity and storage tools on the Elastos platform, it aims to quickly advance towards a smarter, interconnected world.</p>
            </div>
            {/* Card 1 */}
            <div
              className="container"
            >
              <div className={`card-1 rounded-3xl border-2 border-[#B6CCFE] p-8 lg:p-24 w-full flex flex-col lg:flex-row justify-center items-center gap-5 my-36`} data-aos="fade-in"
                data-aos-duration="3000">
                <div className="w-full lg:w-3/12 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-5">
                  <Image src={doubleArrow} className="w-[120px] h-full" data-aos="fade-up"
                    data-aos-duration="1000" />
                  <h1 className="text-5xl font-extrabold mt-4 hidden lg:block" data-aos="fade-up"
                    data-aos-duration="1500">What is <br /> Elastos?</h1>
                  <h1 className="text-4xl font-extrabold mt-4 block lg:hidden" data-aos="fade-up"
                    data-aos-duration="2000">What is Elastos?</h1>
                </div>
                <div className="flex-1">
                  <p className="text-xl w-full text-justify" data-aos="fade-up"
                    data-aos-duration="1500">
                    Founded in 2017 and building on a vision from 2000, is a blockchain-powered internet version. Its recent breakthrough is the introduction of BeL2, a Layer 2 solution leveraging Smart Web technology to revolutionize Bitcoin transactions. Elastos is using Smart Web technology to build the Bitcoin second-layer network BeL2, which extends the efficiency and scalability of the Bitcoin network through smart contracts. This endeavor will enable Bitcoin to power a smart economy and effectively release the liquidity of hundreds of billions of dollars in staked Bitcoin assets.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="container relative"
            >
              <div className={`card-2 w-full my-48`}>
                <span className="small-line w-20 h-2 rounded-full block mb-3"></span>
                <div className="flex flex-col lg:flex-row justify-center items-start gap-5">
                  <div className="w-full lg:w-6/12">
                    <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 flex flex-col justify-start items-start gap-3">
                      <span data-aos="fade-up"
                        data-aos-duration="1000">Smarter Web,</span>
                      <span data-aos="fade-up"
                        data-aos-duration="1500">Smarter Bitcoin,</span>
                      <span data-aos="fade-up"
                        data-aos-duration="2000">Smarter Everything</span>
                    </h1>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl w-full text-justify" data-aos="fade-up"
                      data-aos-duration="3000">
                      Elastos' new BeL2 protocol transforms Bitcoin with smart contract capabilities and staking options, heralding an era of smarter Bitcoin utilization. Concurrently, Elacity DRM redefines Web3's digital rights landscape, using NFT-based decentralized DRM to empower content creators. Together, these breakthroughs are pioneering a future of smarter Web and digital innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div
              className="container relative"
            >
              <div className={`card-3 w-full my-48`}>
                <div className="w-full flex justify-center items-center mb-3">
                  <span className="small-line w-20 h-2 rounded-full block mb-3"></span>
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                  <h1 className="text-4xl lg:text-5xl w-full text-center font-extrabold mb-4" data-aos="fade-up"
                    data-aos-duration="1000">
                    <span>Benefits of Building with Elastos</span>
                  </h1>
                  <p className="text-xl w-full text-justify" data-aos="fade-up"
                    data-aos-duration="1600">
                    Building on Elastos offers unique benefits, including BeL2 network enables Bitcoin smart contracts and staking, enhancing Bitcoin utility. Elastos' DID system, unique with its own side chain, ensures secure, verifiable digital identities. Elacity DRM empowers creators in Web3 with NFT-integrated rights management. This ecosystem fosters advanced decentralized applications, smart web interactions, and creator-centric digital rights, setting Elastos apart as a comprehensive, innovative blockchain platform.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div
              className="container relative"
            >
              <div className={`card-4 w-full my-48`}>
                <div className="w-full flex justify-center items-center mb-3">
                  <span className="small-line w-20 h-2 rounded-full block mb-3"></span>
                </div>
                <h1 className="text-4xl lg:text-5xl w-full text-center font-extrabold mb-4" data-aos="fade-up"
                  data-aos-duration="1000">
                  <span>Cohorts</span>
                </h1>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10">
                  {/* Sub Card 1 */}
                  <div className={`card-1 rounded-3xl border-2 border-[#B6CCFE] p-8 lg:p-14 w-full my-5 lg:my-10`} data-aos="fade-in"
                    data-aos-duration="3000">
                    <div className="w-full">
                      <p className="text-xl w-full text-start" data-aos="fade-up"
                        data-aos-duration="1000">
                        <span className="text-[var(--secondary-color)] font-extrabold">First Cohort:</span> Smart Entertainment and Leisure(Jan-Apr 2024): 6-8 projects in digital entertainment, gaming, and leisure, leveraging BeL2 and Elastos' infrastructure for advanced user experiences.
                        <br />
                        <br />
                        <span className="text-[var(--secondary-color)] font-extrabold">Objective:</span> Showcase Smart Entertainment's potential on the Smart Web with interactive, immersive blockchain-powered experiences.
                      </p>
                    </div>
                  </div>
                  {/* Sub Card 1 */}
                  <div className={`card-1 rounded-3xl border-2 border-[#B6CCFE] p-8 lg:p-14 w-full my-5 lg:my-10`} data-aos="fade-in"
                    data-aos-duration="3000">
                    <div className="w-full">
                      <p className="text-xl w-full text-start" data-aos="fade-up"
                        data-aos-duration="1000">
                        <span className="text-[var(--secondary-color)] font-extrabold">Second Cohort:</span> Smart Finance and DeFi (May-Aug 2024): 8-10 projects innovating in Bitcoin-based finance plus 4 in Smart Entertainment, diversifying the cohort's impact.
                        <br />
                        <br />
                        <span className="text-[var(--secondary-color)] font-extrabold">Objective:</span> Develop DeFi on Bitcoin, creating secure, efficient, user-centric decentralized finance foundations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div
              className="container relative"
            >
              <div className={`card-5 w-full my-48`}>
                <div className="w-full flex justify-center items-center mb-3">
                  <span className="small-line w-20 h-2 rounded-full block mb-3"></span>
                </div>
                <h1 className="text-4xl lg:text-5xl w-full text-center font-extrabold mb-4" data-aos="fade-up"
                  data-aos-duration="1000">
                  <span>Grant Requirements</span>
                </h1>
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-10 mt-10">
                  {/* Sub Card 1 */}
                  <div className={`flex flex-col justify-start items-start gap-5 w-full my-5 lg:my-10`} data-aos="fade-down"
                    data-aos-duration="1600">
                    <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start">
                      <Image src={coin} className="w-[40px] h-[38px] mb-4" />
                      <p className="text-xl w-full text-center lg:text-start">
                        Develop and deliver a solution that incorporates Elastos technology seamlessly.
                      </p>
                    </div>
                  </div>
                  {/* Sub Card 2 */}
                  <div className={`flex flex-col justify-start items-start gap-5 w-full my-5 lg:my-10`} data-aos="fade-down"
                    data-aos-duration="2200">
                    <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start">
                      <Image src={coin} className="w-[40px] h-[38px] mb-4" />
                      <p className="text-xl w-full text-center lg:text-start">
                        Pursue a business strategy
                        that prioritises decentralisation at its core.
                      </p>
                    </div>
                  </div>
                  {/* Sub Card 3 */}
                  <div className={`flex flex-col justify-start items-start gap-5 w-full my-5 lg:my-10`} data-aos="fade-down"
                    data-aos-duration="3000">
                    <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start">
                      <Image src={coin} className="w-[40px] h-[38px] mb-4" />
                      <p className="text-xl w-full text-center lg:text-start">
                        Support Rong Chen's Smart Web vision of delivering a peer-to-peer digital economy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div
              className="container relative"
              id="submit"
            >
              <div className={`card-6 w-full my-48`}>
                <span className="small-line w-20 h-2 rounded-full block mb-3"></span>
                <div className="flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-5">
                  <div className="w-full lg:w-6/12">
                    <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 hidden flex-col justify-start items-start gap-3 lg:flex" data-aos="fade-up"
                      data-aos-duration="1000">
                      Application <br /> Process
                    </h1>
                    <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 flex flex-col justify-start items-start gap-3 lg:hidden" data-aos="fade-up"
                      data-aos-duration="1000">
                      Application Process
                    </h1>
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start gap-4">
                    <div className="flex justify-start items-center gap-3" data-aos="fade-right"
                      data-aos-duration="1000">
                      <span className="number-circle w-[40px] h-[40px] px-4 rounded-full text-white flex justify-center items-center">1</span>
                      <p className="text-xl w-full text-start">
                        Submit your application
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-3" data-aos="fade-right"
                      data-aos-duration="1300">
                      <span className="number-circle w-[40px] h-[40px] px-4 rounded-full text-white flex justify-center items-center">2</span>
                      <p className="text-xl w-full text-start">
                        Applications will be presented to Decision Committee
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-3" data-aos="fade-right"
                      data-aos-duration="1600">
                      <span className="number-circle w-[40px] h-[40px] px-4 rounded-full text-white flex justify-center items-center">3</span>
                      <p className="text-xl w-full text-start">
                        Voted on Applications will be shared to the community
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-3" data-aos="fade-right"
                      data-aos-duration="2200">
                      <span className="number-circle w-[40px] h-[40px] px-4 rounded-full text-white flex justify-center items-center">4</span>
                      <p className="text-xl w-full text-start">
                        Funds will be distributed via Questbook
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 7 */}
            <div
              className="container flex justify-center items-center"
            >
              <div className="relative w-full lg:w-9/12 flex flex-col justify-start items-start gap-5 shadow-2xl last-card p-10 lg:p-16 overflow-hidden">
                <div className="w-full h-full blur-xl absolute top-0 left-0 z-[-1] bg-[#b6ccfe29]"></div>
                <h1 className="text-4xl font-extrabold mt-4 w-full text-center" data-aos="fade-up"
                  data-aos-duration="1000">Be Part of the Smart Web</h1>
                <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSeIErcxNNNC0WqRqcSLV38T1aYpO7o_xsfe9BZYgtxVklS3mQ/viewform'} target="_blank" className="w-full flex justify-center items-center pt-4 relative z-[500]" data-aos="fade-up"
                  data-aos-duration="2000">
                  <div className={`rounded-2xl p-2 button-back`}>
                    <button className={`bg-[var(--secondary-color)] rounded-xl px-14 py-2`}>
                      Apply Now
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div >
        </section  >
        {/* End Other Parts */}
      </div>
      {/* </SmoothScroll> */}
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "common",
    ])),
  },
});

Home.layout = Normal;
