import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.aboutpage}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.vectorIcon} alt="" src="/vector16.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector17.svg" />
        <div className={styles.reviewsFromStudents}>Review's From Students</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.jennyWilson}>Jenny Wilson</div>
          <img className={styles.vectorIcon2} alt="" src="/vector18.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector19.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector20.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector21.svg" />
          <img className={styles.vectorIcon6} alt="" src="/vector22.svg" />
          <img className={styles.aro1Icon} alt="" src="/aro-1@2x.png" />
          <img className={styles.groupInner} alt="" src="/vector-141.svg" />
          <img
            className={styles.invertedCommasTop1Icon}
            alt=""
            src="/invertedcommastop-1@2x.png"
          />
          <div className={styles.whileTheConcept}>
            {" "}
            While the concept is great, and it was hard to keep track of
            important deadlines. The search function for finding resources
            within the app also wasn't very intuitive. It has potential, but it
            needs some improvements before I can fully recommend it.
          </div>
          <div className={styles.ellipseDiv} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.jennyWilson}> David L</div>
          <img className={styles.vectorIcon7} alt="" src="/vector23.svg" />
          <img className={styles.vectorIcon8} alt="" src="/vector24.svg" />
          <img className={styles.vectorIcon9} alt="" src="/vector25.svg" />
          <img className={styles.vectorIcon10} alt="" src="/vector26.svg" />
          <img className={styles.vectorIcon11} alt="" src="/vector27.svg" />
          <img className={styles.aro1Icon} alt="" src="/aro-1@2x.png" />
          <img className={styles.groupInner} alt="" src="/vector-141.svg" />
          <img
            className={styles.invertedCommasTop1Icon}
            alt=""
            src="/invertedcommastop-1@2x.png"
          />
          <div className={styles.whileTheConcept}>
            {" "}
            While the concept is great, and it was hard to keep track of
            important deadlines. The search function for finding resources
            within the app also wasn't very intuitive. It has potential, but it
            needs some improvements before I can fully recommend it.
          </div>
          <div className={styles.ellipseDiv} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild3} />
        <div className={styles.quickLinksUseful}>
          Quick LInks Useful Links School Hours
        </div>
        <div className={styles.groupChild4} />
        <img className={styles.groupChild5} alt="" src="/vector-161.svg" />
        <b className={styles.subscribeOurNewsletter}>
          Subscribe Our Newsletter !
        </b>
        <div className={styles.wantToGet}>
          Want to get the latest updates, exclusive content, and insider tips
          delivered straight to your inbox? Sign up for our newsletter today!
          It's the perfect way to stay informed and maximize your experience
          with
        </div>
        <img className={styles.groupChild6} alt="" src="/vector-151.svg" />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
        <div className={styles.subsribe}>SUBSRIBE</div>
        <img className={styles.groupIcon} alt="" src="/group-52.svg" />
        <img className={styles.groupChild9} alt="" src="/group-76.svg" />
        <img className={styles.groupChild10} alt="" src="/group-53.svg" />
        <div className={styles.homeAboutUsCareersNewsAParent}>
          <div className={styles.homeAboutUsContainer}>
            <p className={styles.home}>{`Home `}</p>
            <p className={styles.home}>About us</p>
            <p className={styles.home}>Careers</p>
            <p className={styles.home}>{`News & Articles`}</p>
          </div>
          <img className={styles.groupChild11} alt="" src="/vector-17.svg" />
          <img className={styles.groupChild12} alt="" src="/vector-17.svg" />
          <img className={styles.groupChild13} alt="" src="/vector-17.svg" />
          <img className={styles.groupChild14} alt="" src="/vector-17.svg" />
        </div>
        <div className={styles.helpCenterContactUsFaqParParent}>
          <div className={styles.homeAboutUsContainer}>
            <p className={styles.home}>Help Center</p>
            <p className={styles.home}>Contact Us</p>
            <p className={styles.home}>FAQ</p>
            <p className={styles.home}>Parent Community</p>
          </div>
          <img className={styles.groupChild11} alt="" src="/vector-17.svg" />
          <img className={styles.groupChild12} alt="" src="/vector-17.svg" />
          <img className={styles.groupChild13} alt="" src="/vector-17.svg" />
          <img className={styles.groupChild14} alt="" src="/vector-17.svg" />
        </div>
        <div className={styles.am5}>8 AM - 5 PM , Monday - Saturday</div>
        <div className={styles.autQuaeConvallis}>
          Aut, quae convallis minim cum ornare! Pede ut rem, totam dictum
          convallis.
        </div>
        <img className={styles.vectorIcon12} alt="" src="/vector28.svg" />
        <img className={styles.groupChild19} alt="" src="/group-791.svg" />
        <img className={styles.groupChild20} alt="" src="/group-801.svg" />
        <img className={styles.groupChild21} alt="" src="/group-811.svg" />
        <img className={styles.groupChild22} alt="" src="/group-821.svg" />
        <div className={styles.veroTemporMorbi}>
          Vero, tempor morbi, adipiscing aliqua nonummy proident perferendis?
          Laboris lacus quidem repellendus quasi.
        </div>
        <div className={styles.groupChild23} />
        <div
          className={styles.privacyPolicy}
        >{`PRIVACY POLICY    |     SUPPORT     |    TERMS & CONDITION`}</div>
        <div className={styles.copyright2022}>
          Copyright © 2022 Educator. All rights reserved.
        </div>
        <div className={styles.enterYourEmail}>Enter your email here</div>
      </div>
      <div className={styles.aboutpageChild} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.homeParent}>
        <div className={styles.home1} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.aboutUs1}>About Us</div>
        <div className={styles.features}>{` Features `}</div>
        <div className={styles.contact}>Contact</div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon13} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon14} alt="" src="/vector3.svg" />
        <img className={styles.groupChild24} alt="" src="/group-4.svg" />
        <img className={styles.groupChild25} alt="" src="/vector-5.svg" />
        <div className={styles.followUs}>Follow Us</div>
      </div>
      <div className={styles.aboutUs2}>About us</div>
      <div className={styles.aboutpageItem} />
      <img
        className={styles.banner2man1Icon}
        alt=""
        src="/banner-2man-1@2x.png"
      />
      <div className={styles.fnShape011Parent}>
        <img
          className={styles.fnShape011Icon}
          alt=""
          src="/fn-shape-01-1@2x.png"
        />
        <img className={styles.icon} alt="" src="/1-1@2x.png" />
        <img className={styles.icon1} alt="" src="/1-1@2x.png" />
        <img className={styles.icon2} alt="" src="/1-1@2x.png" />
        <img className={styles.icon3} alt="" src="/1-1@2x.png" />
        <img className={styles.icon4} alt="" src="/1-1@2x.png" />
        <img className={styles.icon5} alt="" src="/1-1@2x.png" />
        <img className={styles.icon6} alt="" src="/1-1@2x.png" />
        <img className={styles.icon7} alt="" src="/1-1@2x.png" />
        <img className={styles.icon8} alt="" src="/1-1@2x.png" />
        <div className={styles.ourTeamOf}>
          Our team of seasoned business consultants brings a wealth of
          experience and industry knowledge to the table. We partner with you to
          identify areas for improvement, develop strategic plans, and implement
          solutions that drive measurable results. Whether you're looking to
          streamline operations, optimize marketing campaigns, or navigate
          complex financial challenges, we're here to guide you every step of
          the way.
        </div>
        <div className={styles.ourCommitmentTo}>
          Our commitment to excellence sets us apart. We combine in-depth
          expertise with a collaborative approach, ensuring your voice is heard
          throughout the process. As your trusted advisor, we equip you with the
          tools and strategies you need to make informed decisions and achieve
          sustainable growth. Let's work together to build a stronger, more
          resilient future for your business.
        </div>
        <div className={styles.findOutMoreContainer}>
          <p className={styles.home}>{`Find Out More About `}</p>
          <p className={styles.home}>Our Business Consulting</p>
        </div>
      </div>
      <img className={styles.a3fd1Icon} alt="" src="/31511a3fd-1@2x.png" />
    </div>
  );
};

export default AboutPage;
