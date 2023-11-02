import Navbar from "./Navbar";
import styles from "./Services.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
const Services = () => {
  return (
    <div className={styles.container}>
      <Navbar highlight="services" />
      <div className={styles.back}>
        <div className={styles.sloganContent}>
          <h1>
            <span>Services</span>
          </h1>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsContent}>
          <div className={styles.swiper}>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              speed={600}
              parallax={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Parallax, Pagination, Navigation]}
              className={styles.mySwiper}>
              {services.map((item,index) => {
                return (
                  <SwiperSlide className={styles.swiperSlide} key={index} style={{color: `${item.color}`}}>
                    <div
                      slot="container-start"
                      className={styles.parallaxBG}
                      style={{
                        background: `url(${item.service_img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      data-swiper-parallax="-23%"></div>
                  
                    <div className={styles.title} data-swiper-parallax="-300">
                      {item.service_name}
                    </div>
                    <div
                      className={styles.subtitle}
                      data-swiper-parallax="-200">
                      {item.price}
                    </div>
                    <div className={styles.text} data-swiper-parallax="-100">
                      <p>{item.description}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
const services = [
  {
    service_name: "Personalized Beauty Profiles",
    description:
      "Users have the option to create Personalized Beauty Profiles on the website. These profiles allow users to share their makeup preferences, skin types, beauty goals, and any specific concerns they may have. Makeup artists and beauty experts can then use this information to offer personalized product recommendations and beauty tips.",
    price: "Free Access",
    service_img: "/images/beautyProf.jpg",
    color: 'white'
  },
  {
    service_name: "Ask a Makeup Artist",
    description:
      "This service offers users a dedicated section on the website where they can seek guidance and answers to their makeup-related questions. Users can submit queries or concerns about makeup application, product recommendations, skincare routines, or specific beauty issues. Professional makeup artists or experts on the website will respond with expert advice, tips, and solutions.",
    price: "$5-$49",
    service_img: "/images/blueService.jpeg",
    color: 'white',
  },
  {
    service_name: "Video Consultations",
    description:
      "Video consultations provide users with an opportunity to engage in one-on-one virtual sessions with professional makeup artists. Users can schedule appointments to receive personalized makeup advice, tutorials, and demonstrations. During these consultations, makeup artists can provide tailored guidance, tips, and techniques, ensuring users achieve their desired makeup looks.",
    price: "$10-$99/h",
    service_img: "/images/liveChat.jpg",
    color: 'white',
  },

  {
    service_name: "Artist Booking System",
    description:
      "The Artist Booking System is a feature that simplifies the process of scheduling appointments with makeup artists through the website. Users can browse the profiles of makeup artists, check their availability, and book appointments for services like bridal makeup, special event makeup, makeup lessons, or consultations. The system streamlines scheduling, handles payments, and sends appointment reminders.",
    price: "$149-$499",
    service_img: "/images/bookingMake.jpg",
    color: 'black',
  },
  {
    service_name: "Makeup Blogs and Tutorials",
    description:
      " The Makeup Blogs and Tutorials section encourages makeup artists and beauty experts to share their knowledge and insights on the website. Artists can create and publish tutorials, beauty blogs, tips, and product recommendations. Users can access these resources for free to learn from the expertise of these makeup professionals.",
    price: "Free Access",
    service_img: "/images/onli.jpg",
    color: 'black'
  },
  
  {
    service_name: "Online Makeup Marketplace",
    description:
      "The Online Makeup Marketplace is a platform that connects makeup artists with potential clients. Makeup professionals can offer their services through the website, such as bridal makeup, special event makeup, or makeup lessons. Users can browse the profiles of makeup artists, view their work, and book their services directly through the platform.",
    price: "Free Access",
    service_img: "/images/blogger.jpg",
    color: 'black'
  },
];
