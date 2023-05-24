import {useEffect, useState} from "react";
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Reco(){

    const [reco,setReco] = useState("reco_id");
    const [recoArg,setRecoArg] = useState([]);
    const [open, setOpen] = useState(false);
    const [imgUrl,setUrl] = useState("")
    const handleClose = () => setOpen(false);
    const [retre,setRetre] = useState("reco_id");
    const [retreArg,setRetreArg] = useState([]);


    const getReco = () =>{
        return axios.get('http://43.201.45.147/').then((res)=>res.data.hits)

    }
    const {data,isLoading} = useQuery(['Reco'],getReco);


    useEffect(()=>{
        if(reco === "reco_id"){
            return
        }
        else{
            axios.post(`http://43.201.45.147/retrieval_api`,{
                "item_no": reco }
            ).then((res)=> {
                setRecoArg(res.data.hits.hits)
            })
        }
    },[reco])

    useEffect(()=>{
        if(open){
            axios.post(`http://43.201.45.147/retrieval_api`,{
                "item_no": retre }
            ).then((res)=>setRetreArg(res.data.hits.hits))
        }
    },[open])

    if (isLoading) {
        return(
            <div className="text-center">
                잠시만 기다려주세요...
            </div>
        )
    }




    return(
        <>
            <div className="text-center">
                <p>상품을 선택해주세요</p>
            </div>
        <div className="grid grid-cols-10  gap-2 items-center justify-start">
            {
                data.hits.map((res,index)=>{
                    return(
                            <div className="overflow-hidden " onClick={()=>{
                                setReco(res.item_no_idx)
                                setRetre(res.item_no_idx)
                            }} key={index} >
                                <img className="bg-cover" src={`https://fcrec.bunjang.io/img/${res.image_name}.jpg`} width={100} height={200}/>
                            </div>
                    )
                })
            }
        </div>
            {/* 추천 상품 목록 띄위기*/}
            <div className="my-10">
                <p>추천 상품 목록</p>
            </div>
            <div className="grid grid-cols-10 gap-2 items-center justify-start">


                {
                    recoArg.map((res,index)=>{
                        return(
                            <img onClick={()=>{
                                setOpen(true)
                                setUrl(res._source.image_name)
                            }} src={`https://fcrec.bunjang.io/img/${res._source.image_name}.jpg`}/>
                        )
                    })
                }
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <p><span className="text-yellow-300">HY</span>-MALL</p>
                        <img className="py-3" src={`https://fcrec.bunjang.io/img/${imgUrl}.jpg`}/>
                        <p className="text-sm">Brand name</p>
                        <p className="text-lg">Product name</p>
                        <p className="text-3xl">$30</p>
                        <div className="grid grid-cols-5">
                        {
                            retreArg.map((res,index)=>{
                                return(
                                    <img onClick={()=>{
                                        setOpen(true)
                                        setUrl(res._source.image_name)
                                    }} src={`https://fcrec.bunjang.io/img/${res._source.image_name}.jpg`}/>
                                )
                            })
                        }
                        </div>
                    </div>
                </Box>
            </Modal>
        </>

    )


}

export default Reco;