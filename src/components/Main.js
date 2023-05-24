import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Main() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full">
          <Slider {...settings}>
            <div>
              <img src="/image/slide.png" alt="slide" />
            </div>
            <div>
              <img src="/image/slide2.png" alt="slide" />
            </div>
            <div>
              <img src="/image/slide3.png" alt="slide" />
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl mt-16 mb-10">00 님을 위한 추천</h2>
        <div className="flex justify-center space-x-3">
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl mt-16 mb-10">
          00이 즐겨찾기 한 브랜드 상품
        </h2>
        <div className="flex justify-center space-x-3">
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
          <div>
            <img
              src="/image/product.png"
              alt="product"
              width={200}
              height={100}
            />
            <p>모자</p>
            <p className="font-bold">30,000 원</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
