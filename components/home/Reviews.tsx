import avatar1 from "@/public/assets/home/reviews/avatar-1.png";
import avatar2 from "@/public/assets/home/reviews/avatar-2.png";
import avatar3 from "@/public/assets/home/reviews/avatar-3.png";
import productImage1 from "@/public/assets/home/reviews/product-image-1.png";
import productImage2 from "@/public/assets/home/reviews/product-image-2.png";
import productImage3 from "@/public/assets/home/reviews/product-image-3.png";
import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";
import ReviewsCard from "./ReviewsCard";

const reviews = [
  {
    id: 1,
    title: "Good Quality",
    review: "I highly recommend shopping from kicks",
    productImage: productImage1,
    rating: 5,
    reviewer: "Alex Johnson",
    avatar: avatar1,
  },
  {
    id: 2,
    title: "Amazing Fit",
    review: "Exactly what I was looking for, perfect size",
    productImage: productImage2,
    rating: 5,
    reviewer: "Maria Silva",
    avatar: avatar2,
  },
  {
    id: 3,
    title: "Great Experience",
    review: "Fast delivery and the shoes look exactly like the photos",
    productImage: productImage3,
    rating: 4,
    reviewer: "Ryan Park",
    avatar: avatar3,
  },
];

export default function Reviews() {
  return (
    <section className="body-width px-4 lg:px-0 pt-5 lg:pt-32 pb-11.5 lg:pb-32">
      <div className="flex items-center justify-between mb-5 lg:mb-12">
        <SectionTitle>Reviews</SectionTitle>
        <Button variant="primary">SEE ALL</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {reviews.map((item) => (
          <ReviewsCard
            key={item.id}
            title={item.title}
            review={item.review}
            rating={item.rating}
            reviewer={item.reviewer}
            avatar={item.avatar}
            productImage={item.productImage}
          />
        ))}
      </div>
    </section>
  );
}
