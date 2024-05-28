import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FeaturesPage.module.css";

const FeaturesPage = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.featurespage}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector12.svg" />
        <div className={styles.reviewsFromStudents}>Review's From Students</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.jennyWilson}>Jenny Wilson</div>
          <img className={styles.vectorIcon2} alt="" src="/vector13.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector13.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector14.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector14.svg" />
          <img className={styles.vectorIcon6} alt="" src="/vector14.svg" />
          <img className={styles.aro1Icon} alt="" src="/aro-1@2x.png" />
          <img className={styles.groupInner} alt="" src="/vector-14.svg" />
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
          <img className={styles.vectorIcon2} alt="" src="/vector13.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector13.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector14.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector14.svg" />
          <img className={styles.vectorIcon6} alt="" src="/vector14.svg" />
          <img className={styles.aro1Icon} alt="" src="/aro-1@2x.png" />
          <img className={styles.groupInner} alt="" src="/vector-14.svg" />
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
        <img className={styles.groupChild5} alt="" src="/vector-16.svg" />
        <b className={styles.subscribeOurNewsletter}>
          Subscribe Our Newsletter !
        </b>
        <div className={styles.wantToGet}>
          Want to get the latest updates, exclusive content, and insider tips
          delivered straight to your inbox? Sign up for our newsletter today!
          It's the perfect way to stay informed and maximize your experience
          with
        </div>
        <img className={styles.groupChild6} alt="" src="/vector-15.svg" />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
        <div className={styles.subsribe}>SUBSRIBE</div>
        <img className={styles.groupIcon} alt="" src="/group-51.svg" />
        <img className={styles.groupChild9} alt="" src="/group-51.svg" />
        <img className={styles.groupChild10} alt="" src="/group-51.svg" />
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
        <img className={styles.vectorIcon12} alt="" src="/vector15.svg" />
        <img className={styles.groupChild19} alt="" src="/group-79.svg" />
        <img className={styles.groupChild20} alt="" src="/group-80.svg" />
        <img className={styles.groupChild21} alt="" src="/group-81.svg" />
        <img className={styles.groupChild22} alt="" src="/group-82.svg" />
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
      <div className={styles.featurespageChild} />
      <div className={styles.homeParent}>
        <div className={styles.home1} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.aboutUs1}>About Us</div>
        <div className={styles.features}>{` Features `}</div>
        <div className={styles.contact}>Contact</div>
      </div>
      <div className={styles.features1}>Features</div>
      <div className={styles.featurespageItem} />
      <img
        className={styles.banner2man1Icon}
        alt=""
        src="/banner-2man-1@2x.png"
      />
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon13} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon14} alt="" src="/vector3.svg" />
        <img className={styles.groupChild24} alt="" src="/group-4.svg" />
        <img className={styles.groupChild25} alt="" src="/vector-5.svg" />
        <div className={styles.followUs}>Follow Us</div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon13} alt="" src="/vector2.svg" />
        <img className={styles.vectorIcon14} alt="" src="/vector3.svg" />
        <img className={styles.groupChild24} alt="" src="/group-4.svg" />
        <img className={styles.groupChild25} alt="" src="/vector-5.svg" />
        <div className={styles.followUs}>Follow Us</div>
      </div>
      <img className={styles.icon} alt="" src="/1-1@2x.png" />
      <img className={styles.icon1} alt="" src="/1-1@2x.png" />
      <img className={styles.icon2} alt="" src="/1-1@2x.png" />
      <img className={styles.icon3} alt="" src="/1-1@2x.png" />
      <img className={styles.icon4} alt="" src="/1-1@2x.png" />
      <img className={styles.icon5} alt="" src="/1-1@2x.png" />
      <img className={styles.icon6} alt="" src="/1-1@2x.png" />
      <img className={styles.icon7} alt="" src="/1-1@2x.png" />
      <img className={styles.icon8} alt="" src="/1-1@2x.png" />
      <div className={styles.theFeaturesToCreateYourParent}>
        <b className={styles.theFeaturesTo}>{`The Features To Create Your `}</b>
        <div className={styles.groupChild28} />
        <div className={styles.features2}>{`Features `}</div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild29} />
          <div className={styles.seamlessCreation}>Seamless Creation</div>
          <img className={styles.groupChild30} alt="" src="/vector-21.svg" />
          <div className={styles.craftAProfessional}>
            Craft a professional profile that showcases your brand. Fill in key
            details like industry, contact information, and a description.
          </div>
          <div className={styles.groupChild31} />
          <div className={styles.groupChild32} />
          <img className={styles.groupChild33} alt="" src="/group-90.svg" />
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild29} />
          <div
            className={styles.ntuitiveSearch}
          >{`ntuitive Search & Discovery`}</div>
          <img className={styles.groupChild30} alt="" src="/vector-21.svg" />
          <div
            className={styles.craftAProfessional}
          >{`Find the connections and resources that propel your business forward. Utilize powerful search tools to locate users `}</div>
          <div className={styles.groupChild31} />
          <div className={styles.groupChild32} />
          <img className={styles.groupChild33} alt="" src="/group-90.svg" />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild29} />
          <div className={styles.seamlessCreation}>Project Management</div>
          <img className={styles.groupChild30} alt="" src="/vector-21.svg" />
          <div className={styles.craftAProfessional}>
            {" "}
            Utilize tools to create tasks, set deadlines, assign
            responsibilities, and track progress.
          </div>
          <div className={styles.groupChild31} />
          <div className={styles.groupChild32} />
          <img className={styles.groupChild33} alt="" src="/group-90.svg" />
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild29} />
          <div className={styles.seamlessCreation}>
            Effortless Communication
          </div>
          <img className={styles.groupChild30} alt="" src="/vector-21.svg" />
          <div className={styles.craftAProfessional}>
            Foster meaningful connections and streamline collaboration. The app
            offers built-in communication features like secure messaging
          </div>
          <div className={styles.groupChild31} />
          <div className={styles.groupChild32} />
          <img className={styles.groupChild33} alt="" src="/group-90.svg" />
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild29} />
          <div className={styles.seamlessCreation}>Streamlined Task</div>
          <img className={styles.groupChild30} alt="" src="/vector-21.svg" />
          <div className={styles.craftAProfessional}>
            Utilize tools to create tasks, set deadlines, assign
            responsibilities, and track progress.
          </div>
          <div className={styles.groupChild31} />
          <div className={styles.groupChild32} />
          <img className={styles.groupChild33} alt="" src="/group-90.svg" />
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupChild29} />
          <div className={styles.seamlessCreation}>Data-Driven Insights</div>
          <img className={styles.groupChild30} alt="" src="/vector-21.svg" />
          <div className={styles.craftAProfessional}>
            {" "}
            Utilize tools to create tasks, set deadlines, assign
            responsibilities, and track progress.
          </div>
          <div className={styles.groupChild31} />
          <div className={styles.groupChild32} />
          <img className={styles.groupChild33} alt="" src="/group-90.svg" />
        </div>
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </div>
  );
};

export default FeaturesPage;
