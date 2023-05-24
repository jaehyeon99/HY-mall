import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Reco() {
  const [reco, setReco] = useState("reco_id");
  const [recoArg, setRecoArg] = useState([]);
  const [open, setOpen] = useState(false);
  const [imgUrl, setUrl] = useState("");
  const handleClose = () => setOpen(false);
  const [retre, setRetre] = useState("reco_id");
  const [retreArg, setRetreArg] = useState([]);

  const getReco = () => {
    return axios.get("http://43.201.45.147/").then((res) => res.data.hits);
  };
  const { data, isLoading } = useQuery(["Reco"], getReco);

  useEffect(() => {
    if (reco === "reco_id") {
      return;
    } else {
      axios
        .post(`http://43.201.45.147/retrieval_api`, {
          item_no: reco,
        })
        .then((res) => {
          setRecoArg(res.data.hits.hits);
        });
    }
  }, [reco]);

  useEffect(() => {
    if (open) {
      axios
        .post(`http://43.201.45.147/retrieval_api`, {
          item_no: retre,
        })
        .then((res) => setRetreArg(res.data.hits.hits));
    }
  }, [open, retre]);

  if (isLoading) {
    return <div className="text-center">잠시만 기다려주세요...</div>;
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="h-96 w-1/2 overflow-y-auto">
          <div className="grid grid-cols-6 items-center">
            {data.hits.map((res, index) => {
              return (
                <div
                  className="overflow-hidden "
                  onClick={() => {
                    setReco(res.item_no_idx);
                    setRetre(res.item_no_idx);
                  }}
                  key={index}
                >
                  <img
                    className="bg-cover"
                    src={`https://fcrec.bunjang.io/img/${res.image_name}.jpg`}
                    width={100}
                    height={100}
                    alt="Img"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* 추천 상품 목록 띄위기*/}
        {/*<div className="my-10">*/}
        {/*    <p>추천 상품 목록</p>*/}
        {/*</div>*/}
        <div className="w-1/3">
          <div className="flex space-x-10 items-end">
            <div className="w-full">
              <p className="float-right">02</p>
              <br />
              {reco === "reco_id" ? (
                <div className="w-full h-96 bg-gray-300" />
              ) : (
                <div className="grid grid-cols-2 h-96 overflow-y-auto items-center justify-start mt-10">
                  {recoArg.map((res, index) => {
                    return (
                      <img
                        onClick={() => {
                          setOpen(true);
                          setUrl(res._source.image_name);
                        }}
                        src={`https://fcrec.bunjang.io/img/${res._source.image_name}.jpg`}
                        alt="Img"
                      />
                    );
                  })}
                </div>
              )}
            </div>
            <div className="text-2xl">
              <p>r</p>
              <p>e</p>
              <p>c</p>
              <p>o</p>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <p>
                <span className="text-yellow-300">HY</span>-MALL
              </p>
              <img
                className="py-3"
                src={`https://fcrec.bunjang.io/img/${imgUrl}.jpg`}
                alt="Img"
              />
              <p className="text-sm">Brand name</p>
              <p className="text-lg">Product name</p>
              <p className="text-3xl">$30</p>
              <div className="grid grid-cols-5">
                {retreArg.map((res, index) => {
                  return (
                    <img
                      onClick={() => {
                        setOpen(true);
                        setUrl(res._source.image_name);
                      }}
                      src={`https://fcrec.bunjang.io/img/${res._source.image_name}.jpg`}
                      alt="Img"
                    />
                  );
                })}
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="my-5">
        <p>01</p>
        <p className="text-4xl">
          <span className="text-yellow-300">HY</span>-MALL
        </p>
        <p className="text-3xl">Choose a product!</p>
        <p className="my-8">
          To provide a better recommendation service so that you
          <br />
          can enjoy a pleasant shopping experience
        </p>
      </div>
    </>
  );
}

export default Reco;
