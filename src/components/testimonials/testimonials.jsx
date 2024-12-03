import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Isabel Martínez",
    review:
      "Ho iniziato il mio percorso con Mary online e devo dire che sono entusiasta! Nonostante fosse il mio primo allenamento a distanza, mi sono subito sentita motivata. Gli allenamenti sono stimolanti e mai noiosi, ogni sessione è diversa e c'è sempre qualcosa di nuovo da imparare. Anche quando ci sono stati dei momenti difficili, lei è sempre stata lì a darmi il giusto supporto. Grazie alla sua attenzione ai dettagli e alla sua disponibilità, mi sono sentita seguita come se fossi in palestra con lei. Il rapporto qualità-prezzo è eccezionale, consiglio vivamente!",
  },
  {
    avatar: AVTR2,
    name: "Alvaro Gustav",
    review:
      "Mi sono allenato in presenza con Mary e posso dire che è davvero una professionista! Non solo è molto preparata, ma riesce a rendere ogni allenamento divertente e coinvolgente. Non c'è mai quel senso di fatica mentale o di noia che spesso accompagna i percorsi di allenamento a lungo termine. Nonostante la sua giovane esperienza, i risultati si vedono e mi sento più motivato che mai a continuare il mio percorso. È sempre pronta a darti supporto, sia che tu sia in palestra che a casa. Consiglio vivamente di provare le sue classi o le sue coaching. ",
  },
  {
    avatar: AVTR3,
    name: "Milena Cappelletti",
    review:
      "Sinceramente, non pensavo che un allenamento online potesse essere così coinvolgente! Da quando ho iniziato il percorso Focus Goal con Mary, il mio approccio all'esercizio fisico è cambiato. Ogni sessione è nuova, stimolante e mai ripetitiva, il che rende tutto molto più facile da affrontare. Si nota che davvero tiene a ogni cliente. È sempre disponibile per rispondere alle domande e supportarti nei momenti di difficoltà, sia fisica che mentale. Sono molto soddisfatta dei risultati finora e il rapporto qualità-prezzo è davvero vantaggioso.",
  },
  {
    avatar: AVTR4,
    name: "Antonio Pérez",
    review:
      "Non è facile trovare una personal trainer che riesca a mantenere l'entusiasmo alto durante tutto il percorso di allenamento, ma questa ragazza ci riesce alla grande! Ho fatto diverse esperienze con allenamenti online e posso dire che non è mai stato così divertente. Non mi sono mai sentito annoiato o frustrato, anche nei giorni più difficili. La sua esperienza, pur essendo giovane, è evidente nei risultati che ottieni. È sempre pronta a darti consigli, risolvere dubbi e motivarti. Riesce a farti sentire supportato al 100%. Molto contento di averla scelta!",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials" className="testimonials_index">
      <h2>TESTIMONIANZE</h2>


      <Swiper className="container testimonials_container"
      //instal swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true}}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt='persona che ha lasciato la'/>
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review"> {review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default testimonials;
