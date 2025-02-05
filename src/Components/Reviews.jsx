
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import customer1 from "../images/customer1.png";
import customer2 from "../images/customer2.jpg";
import customer3 from "../images/customer3.jpg";
import customer4 from "../images/customer4.jpg";
import customer5 from "../images/customer5.avif";
import customer6 from "../images/customer6.png";
import customer7 from "../images/customer7.png";
import customer8 from "../images/customer8.jpg";
import customer9 from "../images/customer9.jpg";
import customer10 from "../images/customer10.jpg";
import customer11 from "../images/customer11.png";

const reviews = [
  {
    name: "Anouk Mommers",
    location:"Amsterdam, Netherlands",
    date: "Jan 31, 2023",
    rating: 5,
    review: "Great service, immediate reactions and I’ve got my password back in 2 days!",
    image: customer1,
  },
  {
    name: "Korede Bright",
    location:"Lagos, Nigeria",
    date: "may 14, 2023",
    rating: 4,
    review: "Their top priority is keeping your information secure...",
    image: customer2,
  },
  {
    name: "Sarah Williams",
    location:"Madrid, Spain",
    date: "july 22, 2023",
    rating: 3,
    review: "Good service but the recovery process took longer than expected.",
    image: customer3,
  },
  {
    name: "James Thompson",
    location:"New York, USA",
    date: "April 5, 2023",
    rating: 5,
    review: "Fast and reliable! I would highly recommend Asset Haven to anyone.",
    image: customer4,
  },
  {
    name: " Alexandar",
    location:"Toronto, Canada",
    date: "September 5, 2023",
    rating: 5,
    review: "Quick response and excellent customer support! Highly recommended.",
    image: customer5,
  },
  {
    name: "Emily ",
    location:"Manchster, United Kingdom",
    date: "June 5, 2024",
    rating: 5,
    review: "The team was professional and recovered my lost assets efficiently. Thank you!",
    image: customer6,
  },
  {
    name: "Daniel Rodriguez",
    location:"Sydney, Australia",
    date: "July 15, 2024",
    rating: 3,
    review: "The service was okay, but I expected faster results.",
    image: customer7,
  },
  {
    name: "Sophia Martinez",
    location:"Stockholm, Sweden",
    date: "August 2, 2024",
    rating: 5,
    review: "Incredible service! I was kept updated throughout the process. 100% satisfied.",
    image: customer8,
  },
  {
    name: " Anderson",
    location:"Mexico, Mexico city",
    date: "September 18, 2024",
    rating: 4,
    review: "They recovered my lost crypto wallet in record time. Great experience!",
    image: customer9,
  },
  {
    name: "Olivia Brown",
    location:"Texas, USA",
    date: "October 7, 2024",
    rating: 5,
    review: "Absolutely amazing! I thought my funds were gone forever, but Asset Haven recovered everything.",
    image: customer10,
  },
  {
    name: "James ",
    location:"Dubai, UAE",
    date: "November 22, 2024",
    rating: 4,
    review: "Great customer service and a smooth process. Took a bit longer than expected, but overall satisfied.",
    image: customer11,
  },
];

const Reviews = () => {
  return (
    <section className="customer-reviews" id="reviews">
      <h2>What Our Customers Say</h2>
      <div className="reviews-container">
  <div className="reviews-wrapper">
    {reviews.concat(reviews).map((review, index) => ( // Duplicate reviews
      <div className="review-card" key={index}>
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
        <p>{review.review}</p>
        <div className="rating">
          {[...Array(review.rating)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
          ))}
        </div>
        <div className="customer-info">
          <img src={review.image} alt={review.name} className="customer-img" />
          <div>
            <h4>{review.name}</h4>
            <p>{review.location}</p>
            <p className="date">{review.date}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default Reviews;

