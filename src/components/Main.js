import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Main() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
  };
  const randomSetting = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const getReco = () => {
    return axios.get("https://sonchanhyuk.com").then((res) => res.data.hits);
  };
  const { data, isLoading } = useQuery(["Reco"], getReco);

  if (isLoading) {
    return <div className="text-center">잠시만 기다려주세요...</div>;
  }
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
        <h2 className="font-bold text-xl mt-16 mb-10">최근 Hot 상품</h2>
        <div>
          <Slider {...randomSetting}>
            {data.hits.map((res, index) => {
              return (
                <div index={index} className="w-50 h-50">
                  <img
                    className="max-w-96 max-h-28"
                    src={`https://fcrec.bunjang.io/img/${res.image_name}.jpg`}
                    alt="random"
                  />
                </div>
              );
            })}
          </Slider>
          {/*{data.hits.slice(0, 10).map((res, index) => {*/}
          {/*  return (*/}
          {/*    <div index={index} className="w-50 h-50">*/}
          {/*      <img*/}
          {/*        className="max-w-96 max-h-28"*/}
          {/*        src={`https://fcrec.bunjang.io/img/${res.image_name}.jpg`}*/}
          {/*        alt="random"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  );*/}
          {/*})}*/}
        </div>
      </div>
    </div>
  );
}
export default Main;
