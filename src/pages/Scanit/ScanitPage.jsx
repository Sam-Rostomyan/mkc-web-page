import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

              <ul className="scanit__tabs">
                <li
                  className={activeTab === 1 ? "scanit__tabs_tab active" : "scanit__tabs_tab"}
                  onClick={() => toggleTab(1)}
                >
                  Գույքագրում
                </li>
                <li
                  className={activeTab === 2 ? "scanit__tabs_tab active" : "scanit__tabs_tab"}
                  onClick={() => toggleTab(2)}
                >
                  Պահեստի կառավարման ավտոմատացում
                </li>
                <li
                  className={activeTab === 3 ? "scanit__tabs_tab active" : "scanit__tabs_tab"}
                  onClick={() => toggleTab(3)}
                >
                  Արտադրական պրոցեսների ավտոմատացում
                </li>
                <li
                  className={activeTab === 4 ? "scanit__tabs_tab active" : "scanit__tabs_tab"}
                  onClick={() => toggleTab(4)}
                >
                  Վաճառքների կառավարման ավտոմատացում
                </li>
              </ul>

              <div className="scanit__content">
                <div className={activeTab === 1 ? "scanit__content_desc active" : "scanit__content_desc"}>
                  <h2 className="scanit__content_title">Գույքագրում</h2>

                  <ul className="scanit__content_list">
                    <li className="scanit__content_item scanit__content_list_subtitle">Գույքագրումն հնարավորություն է տալիս</li>
                    <li className="scanit__content_item">Հիմնական միջոցների/ապրանքների սկանավորում</li>
                    <li className="scanit__content_item">Քանակական հաշվառում</li>
                    <li className="scanit__content_item">Պիտակավորում, որն իր մեջ ներառում է հետևյալ տեղեկատվությունը</li>
                    <li className="scanit__content_subitem">
                      <ul className="scanit__content_list scanit__content_sublist">
                        <li className="scanit__content_item">Գույքի անվանում</li>
                        <li className="scanit__content_item">Գույքային համար</li>
                        <li className="scanit__content_item">Շտրիխ կոդ</li>
                      </ul>
                    </li>
                    <li className="scanit__content_item">Վերջնական բազայի ձևավորում, համեմատում պատվիրատուի բազայի հետ և անհրաժեշտության դեպքում շտկումների իրականացում</li>
                  </ul>

                  <ul className="scanit__content_list">
                    <li className="scanit__content_item scanit__content_list_subtitle">Առավելությունները</li>
                    <li className="scanit__content_item">Վերջնական բազայի ձևավորում, համեմատում պատվիրատուի բազայի հետ և անհրաժեշտության դեպքում շտկումների իրականացում</li>
                    <li className="scanit__content_item">Գույքագրումը կատարվում է նորագույն տեխնոլոգիայով՝ արագ և արդյունավետ</li>
                    <li className="scanit__content_item">Աշխատանքների կանոնակարգում, որը հնարավորություն կտա հետագայում հեշտությամբ հետևել նյութական արժեքների քանակության շարժին</li>
                  </ul>

                  <p className="scanit__content_text">Կատարված աշխատանքների որակը և բարձր պրոֆեսիոնալիզմն ապահովում է կազմակերպության ավելի քան 9 տարվա փորձն այս ոլորտում։</p>
                </div>

                <div className={activeTab === 2 ? "scanit__content_desc active" : "scanit__content_desc"}>
                  <h2 className="scanit__content_title scanit__content_secondary-title">Պահեստի կառավարման ավտոմատացում</h2>

                  <ul className="scanit__content_list scanit__content_secondary-list">
                    <li className="scanit__content_item scanit__content_list_subtitle scanit__content_list_secondary-subtitle">Համակարգը հնարավորություն է տալիս՝</li>
                    <li className="scanit__content_item">Պահեստի մուտք</li>
                    <li className="scanit__content_item">Պահեստի ելք</li>
                    <li className="scanit__content_item">Ապրանքների տեղաշարժ պահեստների միջև</li>
                    <li className="scanit__content_item">Բացասական ապրանքների հայտնաբերում</li>
                    <li className="scanit__content_item">Պահեստների վերջնական մնացորդների ձևավորում</li>
                    <li className="scanit__content_item">Շրջանառության դիտում</li>
                    <li className="scanit__content_item">Պրոցեսների ինտեգրում դեպի ՀԾ համակարգ և հակառակը</li>
                  </ul>
                </div>
                <div className={activeTab === 3 ? "scanit__content_desc active" : "scanit__content_desc"}>
                  <h2 className="scanit__content_title scanit__content_secondary-title"> Արտադրական պրոցեսների ավտոմատացում</h2>

                  <ul className="scanit__content_list scanit__content_secondary-list">
                    <li className="scanit__content_item scanit__content_list_subtitle">ScanIT համակարգն հնարավորություն է տալիս ավտոմատացնել արտադրական պրոցեսները,Մասնավորապես՝</li>
                    <li className="scanit__content_item">Արտադրանքի քանակի պլանավորում</li>
                    <li className="scanit__content_item">Արտադրանքի թողարկման գրանցում</li>
                    <li className="scanit__content_item">Արտադրանքի պիտակավորում(կոդավորում)</li>
                    <li className="scanit__content_item">Թողարկված արտադրանքի քանակի համեմատում պլանավորված քանակի հետ</li>
                    <li className="scanit__content_item">Խոտանի գրանցում</li>
                    <li className="scanit__content_item">Արտադրանքի տեղաշարժի գրանցում</li>
                    <li className="scanit__content_item">Պահեստների մնացորդների արտացոլում</li>
                    <li className="scanit__content_item">Պահեստների շրջանառության արտացոլում</li>
                    <li className="scanit__content_item">Անհրաժեշտ պրոցեսների ինտեգրում դեպի ՀԾ համակարգ և հակառակը</li>
                  </ul>
                </div>
                <div className={activeTab === 4 ? "scanit__content_desc active" : "scanit__content_desc"}>
                  <h2 className="scanit__content_title scanit__content_secondary-title">Վաճառքների կառավարման ավտոմատացում</h2>

                  <ul className="scanit__content_list scanit__content_secondary-list">
                    <li className="scanit__content_item scanit__content_list_subtitle scanit__content_list_secondary-subtitle">Համակարգը նախատեսված է վաճառքների պրոցեսների ավտոմատացման համար</li>
                    <li className="scanit__content_item scanit__content_list_subtitle">Համակարգը հնարավորություն է տալիս</li>
                    <li className="scanit__content_item">Վաճառքի պատվերի գրանցում</li>
                    <li className="scanit__content_item">Վաճառքի մենեջերի ընտրություն</li>
                    <li className="scanit__content_item">Հաճախորդի ընտրություն</li>
                    <li className="scanit__content_item">Վաճառվող ապրանքների անվանացանկի ձևավորում</li>
                    <li className="scanit__content_item">Ստեղծված վաճառքի պատվերի խմբագրում, հեռացում, կարգավիճակի փոփոխում</li>
                    <li className="scanit__content_item">Գործընթացների ինտեգրում դեպի ՀԾ համակարգ և հակառակը։</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default ScanitPage;
