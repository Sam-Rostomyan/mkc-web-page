import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/tabs.scss";
import "./scanitpage.scss";

import scanitImg1 from "../../assets/images/scanitImg1.png";
import scanitImg2 from "../../assets/images/scanitImg2.png";
import scanitImg3 from "../../assets/images/scanitImg3.png";
import scanitLogo from "../../assets/images/scanitLogo.png";

const ScanitPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  }

  return (
    <>
      <section className="scanit">
        <div className="scanit__container">
          <div className="scanit__wrapper">
            <div className="scanit__photos">
              <img src={scanitImg1} alt="scanit image1" />
              <img className="scanit__photos_img2" src={scanitImg2} alt="scanit image2" />
              <img className="scanit__photos_img3" src={scanitImg3} alt="scanit image3" />
              <button className="goBack scanit__goBack" onClick={goBack}>Հետ</button>
            </div>

            <div className="scanit__info">
              <div className="scanit__logo">
                <img className="scanit__logo_img" src={scanitLogo} alt="scanit logo" />
                <p className="scanit__logo_text">Բիզնեսի կառավարման Mobile Հավելված</p>
              </div>

              {/* Tabs start */}
              <ul className="tabs">
                <li
                  className={activeTab === 1 ? "tabs_tab active" : "tabs_tab"}
                  onClick={() => toggleTab(1)}
                >
                  Գույքագրում
                </li>
                <li
                  className={activeTab === 2 ? "tabs_tab active" : "tabs_tab"}
                  onClick={() => toggleTab(2)}
                >
                  Պահեստի կառավարման ավտոմատացում
                </li>
                <li
                  className={activeTab === 3 ? "tabs_tab active" : "tabs_tab"}
                  onClick={() => toggleTab(3)}
                >
                  Արտադրական պրոցեսների ավտոմատացում
                </li>
                <li
                  className={activeTab === 4 ? "tabs_tab active" : "tabs_tab"}
                  onClick={() => toggleTab(4)}
                >
                  Վաճառքների կառավարման ավտոմատացում
                </li>
              </ul>
              {/* Tabs end */}

              {/* Tabs Content start */}
              <div className="tabs-content">
                <div className={activeTab === 1 ? "tabs-content__desc active" : "tabs-content__desc"}>
                  <h2 className="tabs-content__title">Գույքագրում</h2>

                  <ul className="tabs-content__list">
                    <li className="tabs-content__item tabs-content__list_subtitle">Գույքագրումն հնարավորություն է տալիս</li>
                    <li className="tabs-content__item">Հիմնական միջոցների/ապրանքների սկանավորում</li>
                    <li className="tabs-content__item">Քանակական հաշվառում</li>
                    <li className="tabs-content__item">Պիտակավորում, որն իր մեջ ներառում է հետևյալ տեղեկատվությունը</li>
                    <li className="tabs-content__subitem">
                      <ul className="tabs-content__list tabs-content__sublist">
                        <li className="tabs-content__item">Գույքի անվանում</li>
                        <li className="tabs-content__item">Գույքային համար</li>
                        <li className="tabs-content__item">Շտրիխ կոդ</li>
                      </ul>
                    </li>
                    <li className="tabs-content__item">Վերջնական բազայի ձևավորում, համեմատում պատվիրատուի բազայի հետ և անհրաժեշտության դեպքում շտկումների իրականացում</li>
                  </ul>

                  <ul className="tabs-content__list">
                    <li className="tabs-content__item tabs-content__list_subtitle">Առավելությունները</li>
                    <li className="tabs-content__item">Վերջնական բազայի ձևավորում, համեմատում պատվիրատուի բազայի հետ և անհրաժեշտության դեպքում շտկումների իրականացում</li>
                    <li className="tabs-content__item">Գույքագրումը կատարվում է նորագույն տեխնոլոգիայով՝ արագ և արդյունավետ</li>
                    <li className="tabs-content__item">Աշխատանքների կանոնակարգում, որը հնարավորություն կտա հետագայում հեշտությամբ հետևել նյութական արժեքների քանակության շարժին</li>
                  </ul>

                  <p className="tabs-content__text">Կատարված աշխատանքների որակը և բարձր պրոֆեսիոնալիզմն ապահովում է կազմակերպության ավելի քան 9 տարվա փորձն այս ոլորտում։</p>
                </div>

                <div className={activeTab === 2 ? "tabs-content__desc active" : "tabs-content__desc"}>
                  <h2 className="tabs-content__title tabs-content__secondary-title">Պահեստի կառավարման ավտոմատացում</h2>

                  <ul className="tabs-content__list tabs-content__secondary-list">
                    <li className="tabs-content__item tabs-content__list_subtitle tabs-content__list_secondary-subtitle">Համակարգը հնարավորություն է տալիս՝</li>
                    <li className="tabs-content__item">Պահեստի մուտք</li>
                    <li className="tabs-content__item">Պահեստի ելք</li>
                    <li className="tabs-content__item">Ապրանքների տեղաշարժ պահեստների միջև</li>
                    <li className="tabs-content__item">Բացասական ապրանքների հայտնաբերում</li>
                    <li className="tabs-content__item">Պահեստների վերջնական մնացորդների ձևավորում</li>
                    <li className="tabs-content__item">Շրջանառության դիտում</li>
                    <li className="tabs-content__item">Պրոցեսների ինտեգրում դեպի ՀԾ համակարգ և հակառակը</li>
                  </ul>
                </div>
                <div className={activeTab === 3 ? "tabs-content__desc active" : "tabs-content__desc"}>
                  <h2 className="tabs-content__title tabs-content__secondary-title"> Արտադրական պրոցեսների ավտոմատացում</h2>

                  <ul className="tabs-content__list tabs-content__secondary-list">
                    <li className="tabs-content__item tabs-content__list_subtitle">ScanIT համակարգն հնարավորություն է տալիս ավտոմատացնել արտադրական պրոցեսները,Մասնավորապես՝</li>
                    <li className="tabs-content__item">Արտադրանքի քանակի պլանավորում</li>
                    <li className="tabs-content__item">Արտադրանքի թողարկման գրանցում</li>
                    <li className="tabs-content__item">Արտադրանքի պիտակավորում(կոդավորում)</li>
                    <li className="tabs-content__item">Թողարկված արտադրանքի քանակի համեմատում պլանավորված քանակի հետ</li>
                    <li className="tabs-content__item">Խոտանի գրանցում</li>
                    <li className="tabs-content__item">Արտադրանքի տեղաշարժի գրանցում</li>
                    <li className="tabs-content__item">Պահեստների մնացորդների արտացոլում</li>
                    <li className="tabs-content__item">Պահեստների շրջանառության արտացոլում</li>
                    <li className="tabs-content__item">Անհրաժեշտ պրոցեսների ինտեգրում դեպի ՀԾ համակարգ և հակառակը</li>
                  </ul>
                </div>
                <div className={activeTab === 4 ? "tabs-content__desc active" : "tabs-content__desc"}>
                  <h2 className="tabs-content__title tabs-content__secondary-title">Վաճառքների կառավարման ավտոմատացում</h2>

                  <ul className="tabs-content__list tabs-content__secondary-list">
                    <li className="tabs-content__item tabs-content__list_subtitle tabs-content__list_secondary-subtitle">Համակարգը նախատեսված է վաճառքների պրոցեսների ավտոմատացման համար</li>
                    <li className="tabs-content__item tabs-content__list_subtitle">Համակարգը հնարավորություն է տալիս</li>
                    <li className="tabs-content__item">Վաճառքի պատվերի գրանցում</li>
                    <li className="tabs-content__item">Վաճառքի մենեջերի ընտրություն</li>
                    <li className="tabs-content__item">Հաճախորդի ընտրություն</li>
                    <li className="tabs-content__item">Վաճառվող ապրանքների անվանացանկի ձևավորում</li>
                    <li className="tabs-content__item">Ստեղծված վաճառքի պատվերի խմբագրում, հեռացում, կարգավիճակի փոփոխում</li>
                    <li className="tabs-content__item">Գործընթացների ինտեգրում դեպի ՀԾ համակարգ և հակառակը։</li>
                  </ul>
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

export default ScanitPage;
