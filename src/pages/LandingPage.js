import { useCallback } from "react";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const onReadMoreTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='removebgPreview1Image']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='engagingSpacious']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onReadMoreText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.landingpage}>
      <div className={styles.landingpageChild} />
      <img
        className={styles.pinkHeaderBg1Icon}
        alt=""
        src="/pinkheaderbg-1@2x.png"
      />
      <img className={styles.landingpageItem} alt="" src="/group-1.svg" />
      <img className={styles.landingpageInner} alt="" src="/vector-1.svg" />
      <img className={styles.heroMock1Icon} alt="" src="/hero-mock-1@2x.png" />
      <img className={styles.user1Icon} alt="" src="/user-1.svg" />
      <img className={styles.group291Icon} alt="" src="/group29-1@2x.png" />
      <img className={styles.rt1Icon} alt="" src="/rt-1.svg" />
      <img
        className={styles.backgroundShape1Icon}
        alt=""
        src="/backgroundshape-1.svg"
      />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.shape111Icon} alt="" src="/shape-11-1@2x.png" />
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        <img className={styles.groupChild} alt="" src="/group-4.svg" />
        <img className={styles.groupItem} alt="" src="/vector-5.svg" />
        <div className={styles.followUs}>Follow Us</div>
      </div>
      <div className={styles.bestBusinessAppContainer}>
        <p className={styles.best}>{`Best `}</p>
        <p className={styles.best}>Business App</p>
      </div>
      <div className={styles.streamlineYourOperations}>
        Streamline your operations and enhance productivity with our top-rated
        business app, designed to manage tasks, communicate seamlessly, and
        integrate with essential tools.
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.readMore} onClick={onReadMoreTextClick}>
        Read More
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.aboutUs}>About Us</div>
        <div className={styles.features}>{` Features `}</div>
        <div className={styles.contact}>Contact</div>
      </div>
      <div className={styles.homeAboutUs}>Home About Us Features Contact</div>
      <div className={styles.groupParent}>
        <img className={styles.groupInner} alt="" src="/group-63@2x.png" />
        <div className={styles.groupContainer}>
          <div className={styles.vectorGroup}>
            <img className={styles.groupChild1} alt="" src="/vector-7.svg" />
            <img className={styles.groupChild2} alt="" src="/vector-6.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
            <div className={styles.ellipseDiv} />
            <img
              className={styles.content1Icon}
              alt=""
              src="/content-1@2x.png"
            />
            <div className={styles.exploreOurExpansive}>
              Explore Our Expansive
            </div>
            <div className={styles.experienceIncreasedEfficienc}>
              {" "}
              Experience increased efficiency and collaboration, whether you're
              working remotely or in the office.
            </div>
            <div className={styles.groupChild3} />
            <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
            <img className={styles.groupIcon} alt="" src="/group-5.svg" />
          </div>
          <div className={styles.vectorContainer}>
            <img className={styles.groupChild1} alt="" src="/vector-7.svg" />
            <img className={styles.groupChild5} alt="" src="/vector-61.svg" />
            <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
            <div className={styles.groupChild6} />
            <img
              className={styles.content1Icon1}
              alt=""
              src="/content-1@2x.png"
            />
            <div className={styles.discoverTheVibrant}>
              Discover the Vibrant
            </div>
            <div className={styles.experienceIncreasedEfficienc1}>
              {" "}
              Experience increased efficiency and collaboration, whether you're
              working remotely or in the office.
            </div>
            <div className={styles.groupChild7} />
            <img className={styles.vectorIcon7} alt="" src="/vector5.svg" />
            <img className={styles.groupChild8} alt="" src="/group-5.svg" />
          </div>
          <img className={styles.girl1Icon} alt="" src="/girl-1@2x.png" />
          <div className={styles.groupDiv}>
            <img className={styles.groupChild1} alt="" src="/vector-7.svg" />
            <img className={styles.groupChild5} alt="" src="/vector-6.svg" />
            <div className={styles.groupChild6} />
            <img className={styles.vectorIcon6} alt="" src="/vector7.svg" />
            <img
              className={styles.content1Icon1}
              alt=""
              src="/content-1@2x.png"
            />
            <div className={styles.spaciousLearning}>Spacious Learning</div>
            <div className={styles.experienceIncreasedEfficienc1}>
              {" "}
              Experience increased efficiency and collaboration, whether you're
              working remotely or in the office.
            </div>
            <div className={styles.groupChild7} />
            <img className={styles.vectorIcon7} alt="" src="/vector5.svg" />
            <img className={styles.groupChild8} alt="" src="/group-5.svg" />
          </div>
          <div className={styles.dsd2} />
        </div>
        <div
          className={styles.engagingSpaciousContainer}
          data-scroll-to="engagingSpacious"
        >
          <p className={styles.best}>{`Engaging & Spacious `}</p>
          <p className={styles.best}>School Campus</p>
        </div>
        <div className={styles.ourSchoolCampus}>
          Our school campus offers an engaging and spacious environment,
          fostering creativity and collaboration among students. With
          state-of-the-art facilities and ample green spaces, it provides the
          perfect setting for academic and extracurricular activities.
        </div>
      </div>
      <img className={styles.asd1Icon} alt="" src="/asd-1@2x.png" />
      <img className={styles.zas1Icon} alt="" src="/zas-1@2x.png" />
      <img
        className={styles.removebgPreview1Icon}
        alt=""
        src="/4667617removebgpreview-1@2x.png"
        data-scroll-to="removebgPreview1Image"
      />
      <div className={styles.easyAndPerfectContainer}>
        <p className={styles.best}>{`Easy And Perfect Solution For `}</p>
        <p className={styles.best}>Your Business App</p>
      </div>
      <div className={styles.transformYourBusinessContainer}>
        <p className={styles.best}>
          Transform your business with our easy and perfect solution for your
          app. Designed to streamline operations and enhance user experience,
          our solution integrates seamlessly with your existing systems.
        </p>
        <p className={styles.best}>&nbsp;</p>
        <p className={styles.best}>
          Boost productivity, improve customer satisfaction, and stay ahead of
          the competition with a tool that is as effective as it is
          user-friendly. Discover the perfect balance of simplicity and
          functionality for your business needs..
        </p>
      </div>
      <div className={styles.landingpageChild1} />
      <img className={styles.xc21Icon} alt="" src="/xc2-1@2x.png" />
      <div className={styles.readMore1} onClick={onReadMoreText1Click}>
        Read More
      </div>
      <img className={styles.landingpageChild2} alt="" src="/vector-13.svg" />
      <div className={styles.groupParent1}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild14} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild15} />
            <div className={styles.groupChild16} />
            <div className={styles.groupChild17} />
            <div className={styles.groupChild18} />
            <img className={styles.vectorIcon10} alt="" src="/vector8.svg" />
            <div className={styles.makeInternalBusiness}>
              Make Internal business
            </div>
            <div className={styles.thisProfileEnsures}>
              This profile ensures you're readily connected to colleagues and
              teams within your organization.
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild15} />
            <div className={styles.groupChild20} />
            <div className={styles.groupChild21} />
            <div className={styles.groupChild22} />
            <img className={styles.vectorIcon10} alt="" src="/vector8.svg" />
            <div className={styles.makeInternalBusiness}>
              Make service-based
            </div>
            <div className={styles.withYourProfile}>
              With your profile established, you can immediately begin
              showcasing your services or products.
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild15} data-scroll-to="rectangle" />
            <img className={styles.groupChild24} alt="" src="/group-68.svg" />
            <div className={styles.makeAProfile}>Make A Profile</div>
            <div className={styles.thisProfileBecomes}>
              This profile becomes your launchpad for fostering valuable
              connections with potential clients and partners.
            </div>
          </div>
          <div className={styles.howDoesThis}>How does This App Work?</div>
          <img
            className={styles.removebgPreview1Icon1}
            alt=""
            src="/4934434removebgpreview-1@2x.png"
          />
        </div>
        <div className={styles.designedWorkedContainer}>
          <p className={styles.best}>{`Designed & Worked By The Latest `}</p>
          <p className={styles.best}>Partners</p>
        </div>
        <img className={styles.sa1Icon} alt="" src="/sa-1@2x.png" />
        <img className={styles.sa11Icon} alt="" src="/sa1-1@2x.png" />
        <img
          className={styles.freelanceManIsWorkingRemovIcon}
          alt=""
          src="/freelancemanisworkingremovebgpreview-1@2x.png"
        />
        <div className={styles.groupChild25} />
        <div className={styles.groupChild26} />
        <div className={styles.exploreThePower}>
          Explore the power of collaboration
        </div>
        <div className={styles.groupChild27} />
        <div
          className={styles.discoverWhatsDesigned}
        >{`Discover what's Designed & Worked`}</div>
        <div className={styles.groupChild28} />
        <div className={styles.byTheLatest}>
          {" "}
          By The Latest Partners: Our cutting-edge platform
        </div>
        <div className={styles.theLatestPartnersContainer}>
          <p className={styles.best}>
            The Latest Partners" with specific names if you have established
            partnerships with leading companies or technologies.
          </p>
          <p className={styles.best}>
            Utilize our intuitive tools to create detailed listings, highlight
            your expertise, and set competitive pricing. The app streamlines the
            process of connecting with customers and managing bookings.
          </p>
        </div>
      </div>
      <div className={styles.landingpageChild3} />
      <img
        className={styles.screenshot131Icon}
        alt=""
        src="/screenshot13-1@2x.png"
      />
      <img
        className={styles.screenshot171Icon}
        alt=""
        src="/screenshot17-1@2x.png"
      />
      <img
        className={styles.screenshot161Icon}
        alt=""
        src="/screenshot16-1@2x.png"
      />
      <img
        className={styles.screenshot141Icon}
        alt=""
        src="/screenshot14-1@2x.png"
      />
      <img
        className={styles.screenshot151Icon}
        alt=""
        src="/screenshot15-1@2x.png"
      />
      <img
        className={styles.phoneMokeup21Icon}
        alt=""
        src="/phonemokeup2-1@2x.png"
      />
      <div className={styles.appScreenshots}>App Screenshots</div>
      <div className={styles.theseVisualsShowcase}>
        These visuals showcase the app's interface, key features, and overall
        workflow, giving you a clear idea of how it looks and feels in action
      </div>
      <img className={styles.vectorIcon12} alt="" src="/vector9.svg" />
      <img className={styles.vectorIcon13} alt="" src="/vector10.svg" />
      <img className={styles.vectorIcon14} alt="" src="/vector10.svg" />
      <div className={styles.landingpageChild4} />
      <img className={styles.vectorIcon15} alt="" src="/vector11.svg" />
      <img className={styles.vectorIcon16} alt="" src="/vector12.svg" />
      <div className={styles.reviewsFromStudents}>Review's From Students</div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild29} />
        <div className={styles.jennyWilson}>Jenny Wilson</div>
        <img className={styles.vectorIcon17} alt="" src="/vector13.svg" />
        <img className={styles.vectorIcon18} alt="" src="/vector13.svg" />
        <img className={styles.vectorIcon19} alt="" src="/vector14.svg" />
        <img className={styles.vectorIcon20} alt="" src="/vector14.svg" />
        <img className={styles.vectorIcon21} alt="" src="/vector14.svg" />
        <img className={styles.aro1Icon} alt="" src="/aro-1@2x.png" />
        <img className={styles.groupChild30} alt="" src="/vector-14.svg" />
        <img
          className={styles.invertedCommasTop1Icon}
          alt=""
          src="/invertedcommastop-1@2x.png"
        />
        <div className={styles.thisAppIs}>
          This app is a lifesaver! It's made staying organized and on top of my
          classes so much easier. I love The interface is super user-friendly
          and the design is sleek – it's actually enjoyable to use! Highly
          recommend to any student looking to boost their productivity
        </div>
        <div className={styles.groupChild31} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild29} />
        <div className={styles.jennyWilson}>Sarah M</div>
        <img className={styles.vectorIcon17} alt="" src="/vector13.svg" />
        <img className={styles.vectorIcon19} alt="" src="/vector14.svg" />
        <img className={styles.vectorIcon18} alt="" src="/vector14.svg" />
        <img className={styles.vectorIcon20} alt="" src="/vector14.svg" />
        <img className={styles.vectorIcon21} alt="" src="/vector14.svg" />
        <img className={styles.aro1Icon} alt="" src="/aro-1@2x.png" />
        <img className={styles.groupChild30} alt="" src="/vector-14.svg" />
        <img
          className={styles.invertedCommasTop1Icon}
          alt=""
          src="/invertedcommastop-1@2x.png"
        />
        <div className={styles.thisAppIs}>
          This app is a lifesaver! It's made staying organized and on top of my
          classes so much easier. I love The interface is super user-friendly
          and the design is sleek – it's actually enjoyable to use! Highly
          recommend to any student looking to boost their productivity
        </div>
        <div className={styles.groupChild31} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      </div>
      <div className={styles.landingpageChild5} />
      <div className={styles.quickLinksUseful}>
        Quick LInks Useful Links School Hours
      </div>
      <div className={styles.landingpageChild6} />
      <img className={styles.landingpageChild7} alt="" src="/vector-16.svg" />
      <b className={styles.subscribeOurNewsletter}>
        Subscribe Our Newsletter !
      </b>
      <div className={styles.wantToGet}>
        Want to get the latest updates, exclusive content, and insider tips
        delivered straight to your inbox? Sign up for our newsletter today! It's
        the perfect way to stay informed and maximize your experience with
      </div>
      <img className={styles.landingpageChild8} alt="" src="/vector-15.svg" />
      <div className={styles.landingpageChild9} />
      <div className={styles.landingpageChild10} />
      <div className={styles.subsribe}>SUBSRIBE</div>
      <img className={styles.landingpageChild11} alt="" src="/group-51.svg" />
      <img className={styles.landingpageChild12} alt="" src="/group-51.svg" />
      <img className={styles.landingpageChild13} alt="" src="/group-51.svg" />
      <div className={styles.homeAboutUsCareersNewsAParent}>
        <div className={styles.homeAboutUsContainer}>
          <p className={styles.best}>{`Home `}</p>
          <p className={styles.best}>About us</p>
          <p className={styles.best}>Careers</p>
          <p className={styles.best}>{`News & Articles`}</p>
        </div>
        <img className={styles.groupChild35} alt="" src="/vector-17.svg" />
        <img className={styles.groupChild36} alt="" src="/vector-17.svg" />
        <img className={styles.groupChild37} alt="" src="/vector-17.svg" />
        <img className={styles.groupChild38} alt="" src="/vector-17.svg" />
      </div>
      <div className={styles.helpCenterContactUsFaqParParent}>
        <div className={styles.homeAboutUsContainer}>
          <p className={styles.best}>Help Center</p>
          <p className={styles.best}>Contact Us</p>
          <p className={styles.best}>FAQ</p>
          <p className={styles.best}>Parent Community</p>
        </div>
        <img className={styles.groupChild35} alt="" src="/vector-17.svg" />
        <img className={styles.groupChild36} alt="" src="/vector-17.svg" />
        <img className={styles.groupChild37} alt="" src="/vector-17.svg" />
        <img className={styles.groupChild38} alt="" src="/vector-17.svg" />
      </div>
      <div className={styles.am5}>8 AM - 5 PM , Monday - Saturday</div>
      <div className={styles.autQuaeConvallis}>
        Aut, quae convallis minim cum ornare! Pede ut rem, totam dictum
        convallis.
      </div>
      <img className={styles.vectorIcon27} alt="" src="/vector15.svg" />
      <img className={styles.landingpageChild14} alt="" src="/group-79.svg" />
      <img className={styles.landingpageChild15} alt="" src="/group-80.svg" />
      <img className={styles.landingpageChild16} alt="" src="/group-81.svg" />
      <img className={styles.landingpageChild17} alt="" src="/group-82.svg" />
      <div className={styles.veroTemporMorbi}>
        Vero, tempor morbi, adipiscing aliqua nonummy proident perferendis?
        Laboris lacus quidem repellendus quasi.
      </div>
      <div className={styles.landingpageChild18} />
      <div
        className={styles.privacyPolicy}
      >{`PRIVACY POLICY    |     SUPPORT     |    TERMS & CONDITION`}</div>
      <div className={styles.copyright2022}>
        Copyright © 2022 Educator. All rights reserved.
      </div>
      <div className={styles.enterYourEmail}>Enter your email here</div>
    </div>
  );
};

export default LandingPage;
