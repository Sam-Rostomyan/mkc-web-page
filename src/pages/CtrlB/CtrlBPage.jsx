import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/tabs.scss";
import './ctrbpage.scss';

import ctrlbImg1 from "../../assets/images/ctrlbImg1.png";
import ctrlbImg2 from "../../assets/images/ctrlbImg2.png";
import ctrlbImg3 from "../../assets/images/ctrlbImg3.png";
import ctrlbLogo from "../../assets/images/ctrlbLogo.png";

const CtrlBPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  }

  return (
    <>
      <section className="ctrlb">
        <div className="ctrlb__container">
          <div className="ctrlb__wrapper">
            <div className="ctrlb__photos">
              <div className="ctrlb__photos_box">
                <img src={ctrlbImg1} alt="ctrlb image1" />
              </div>

              <div className="ctrlb__photos_box">
                <img src={ctrlbImg2} alt="ctrlb image2" />
              </div>
              
              <div className="ctrlb__photos_box">
                <img src={ctrlbImg3} alt="ctrlb image3" />
              </div>

              <button className="goBack ctrlb__goBack" onClick={goBack}>Հետ</button>
            </div>

            <div className="ctrlb__info">
              <div className="ctrlb__info_content">
                {/* Tabs start */}
                <ul className="tabs ctrlb__tabs">
                  <li
                    className={activeTab === 1 ? "tabs_tab active" : "tabs_tab"}
                    onClick={() => toggleTab(1)}
                  >
                    Վաճառք
                  </li>
                  <li
                    className={activeTab === 2 ? "tabs_tab active" : "tabs_tab"}
                    onClick={() => toggleTab(2)}
                  >
                    Գնումներ
                  </li>
                  <li
                    className={activeTab === 3 ? "tabs_tab active" : "tabs_tab"}
                    onClick={() => toggleTab(3)}
                  >
                    Առաքում
                  </li>
                  <li
                    className={activeTab === 4 ? "tabs_tab active" : "tabs_tab"}
                    onClick={() => toggleTab(4)}
                  >
                    Պահեստ
                  </li>
                  <li
                    className={activeTab === 5 ? "tabs_tab active" : "tabs_tab"}
                    onClick={() => toggleTab(5)}
                  >
                    Ֆինանսներ
                  </li>
                  <li
                    className={activeTab === 6 ? "tabs_tab active" : "tabs_tab"}
                    onClick={() => toggleTab(6)}
                  >
                    Արտադրություն
                  </li>
                </ul>
                {/* Tabs end */}

                <div className="ctrlb__logo">
                  <img className="ctrlb__logo_img" src={ctrlbLogo} alt="ctrlb logo" />
                  <p className="ctrlb__logo_text">Բիզնես պրոցեսների ավտոմատացում</p>
                </div>
              </div>

              {/* Tabs Content start */}
              <div className="tabs-content">
                <div className={activeTab === 1 ? "tabs-content__desc ctrlb__content_desc active" : "tabs-content__desc ctrlb__content_desc"}>
                  <h2 className="tabs-content__title ctrlb__content-title">Վաճառք</h2>

                  <ul className="tabs-content__list ctrlb__list tabs-content__secondary-list">
                    <li className="tabs-content__item tabs-content__list_subtitle">Համակարգը նախատեսված է վաճառքների պրոցեսների ավտոմատացման համար։</li>
                    <li className="tabs-content__item tabs-content__list_subtitle">Համակարգի օգնությամբ հնարավոր է</li>
                    <li className="tabs-content__item">Գրանցել Նոր վաճառք՝ ցանկից ընտրելով վաճառքի ենթակա ապրանքը/ապրանքները, հաճախորդին։</li>
                    <li className="tabs-content__item">Կատարել վճարում՝ կանխիկ, անկանխիկ եղանակով</li>
                    <li className="tabs-content__item">Տպել ՀԴՄ կտրոն, Հաշիվ ապրանքագիր</li>
                    <li className="tabs-content__item">Վաճառքի վերադարձ</li>
                    <li className="tabs-content__item">Բեռնագիր</li>
                    <li className="tabs-content__item tabs-content__list_subtitle">Տվյալների ինտեգրացիա  Business Control և ՀԾ համակարգերի միջև</li>
                  </ul>
                </div>

                <div className={activeTab === 2 ? "tabs-content__desc ctrlb__content_desc active" : "tabs-content__desc ctrlb__content_desc"}>
                  <h2 className="tabs-content__title ctrlb__content-title">Գնումներ</h2>

                  <ul className="tabs-content__list ctrlb__list tabs-content__secondary-list">
                    <li className="tabs-content__item tabs-content__list_subtitle">Համակարգը նախատեսված է կազմակերպոության տարբեր բաժիններից գնման հայտերի ընդունման և գնման գործընթացների  ավտոմատացման համար։</li>
                    <li className="tabs-content__item tabs-content__list_subtitle">Համակարգի օգնությամբ հնարավոր է</li>
                    <li className="tabs-content__item">Գնման հայտերի ստեղծում տարբեր ստորաբաժանումների կողմից</li>
                    <li className="tabs-content__item">Գնման հայտերի մշակում</li>
                    <li className="tabs-content__item">Պատվերների կառավարում</li>
                    <li className="tabs-content__item">Բեռնագրերի գրանցում</li>
                    <li className="tabs-content__item">Հաշվետվությունների դիտում</li>
                    <li className="tabs-content__item tabs-content__list_subtitle">Տվյալների ինտեգրացիա  Business Control և ՀԾ համակարգերի միջև</li>
                  </ul>
                </div>

                <div className={activeTab === 3 ? "tabs-content__desc ctrlb__content_desc active" : "tabs-content__desc ctrlb__content_desc"}>
                  <h2 className="tabs-content__title ctrlb__content-title">Առաքում</h2>

                  <p className="tabs-content__text ctrlb__content_text">Համակարգը նախատեսված է կազմակերպությունների վաճառքների և գնումների առաքումները գրանցելու, կառավարելու և իրական ժամանակում շարժին հետևելու համար։</p>
                  <p className="tabs-content__text ctrlb__content_text">Առաքիչների համար առկա է համակարգի մոբայլ հավելվածը, որի օգնությամբ առաքիչը տեսնում է առաքման ենթակա ապրանքներն ու հասցեները։ Առաքիչը առաքումը վերջացնելուց հետո տալիս է առաքման  ավարտ։</p>
                </div>

                <div className={activeTab === 4 ? "tabs-content__desc ctrlb__content_desc active" : "tabs-content__desc ctrlb__content_desc"}>
                  <h2 className="tabs-content__title ctrlb__content-title">Պահեստ</h2>

                  <h1 style={{ textAlign: "center", marginTop: "100px" }}>Շուտով․․․</h1>
                </div>

                <div className={activeTab === 5 ? "tabs-content__desc ctrlb__content_desc active" : "tabs-content__desc ctrlb__content_desc"}>
                  <h2 className="tabs-content__title ctrlb__content-title">Ֆինանսներ</h2>

                  <h1 style={{ textAlign: "center", marginTop: "100px" }}>Շուտով․․․</h1>
                </div>

                <div className={activeTab === 6 ? "tabs-content__desc ctrlb__content_desc active" : "tabs-content__desc ctrlb__content_desc"}>
                  <h2 className="tabs-content__title ctrlb__content-title">Արտադրություն</h2>

                  <h1 style={{ textAlign: "center", marginTop: "100px" }}>Շուտով․․․</h1>
                </div>
              </div>
              {/* Tabs Content end */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default CtrlBPage;
