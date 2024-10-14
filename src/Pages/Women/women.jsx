import React, { useEffect, useState } from 'react'
import Heading from '../../Assets/Women/heading.png'
import BackgroundImage from '../../Assets/Women/background.png'
import Image1 from '../../Assets/Women/image.png'
import Image2 from '../../Assets/Women/image2.png'
import HomeSectionModal from './Modals/homeSectionModal'
import RecommendedPerfumesModal from './Modals/recommendedPerfumesModal'
import SpecialBackgroundsModal from './Modals/specialBackgroundsModal'
import SpecialPerfumesModal from './Modals/specialPerfumesModals'
import { useDispatch, useSelector } from 'react-redux'
import { getWomenPageData } from '../../Redux/WomensPage/WomensPageActions'


const Women = () => {


    const dispatch = useDispatch();
    const {womenPageData , loading} = useSelector((store)=>store.womenPageReducer)

    useEffect(()=>{
        dispatch(getWomenPageData())
    },[dispatch])

    useEffect(()=>{
        console.log({Women:womenPageData})
    },[womenPageData])
    
    const [isOpenModal,setIsOpenModal] = useState(
        {
            home:{
                addAnotherImage:false,
                deleteImage:false,
            },
            recommendedPerfumes:{
                replaceImage:false,
                deleteImage:false,
            },
            specialPerfumes:{
                replaceImage:false,
                deleteImage:false,
            },
            specialBackgrounds:{
                addAnotherImage:false,
                deleteImage:false,
            }
        }
    )

    const headingImage=[
        {
            image:Heading
        },
    ]

    const recommendedPerfumes=[
        {
            image:Image1
        },
        {
            image:Image2
        }
    ]

    const specialPerfumes=[
        {
            image:Image1
        },
        {
            image:Image2
        },
        {
            image:Image1
        }
    ]

    const backgroundImages=[
        {
            image:BackgroundImage
        },
        {
            image:BackgroundImage
        }
    ]

    const openHomeSectionModal = (modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                home:{
                    ...prevState.home,
                    [modalType]:true,
                }
            })
        )
    }


    const [recommendedPerfumesData,setRecommendedPerfumesData]=useState(null);
    const [specialPerfumesData,setSpecialPerfumesData]=useState(null);
    const [specialBackgroundsData,setSpecialBackgroundsData]=useState(null);

    const openRecommendedPerfumesModal = (modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                recommendedPerfumes:{
                    ...prevState.recommendedPerfumes,
                    [modalType]:true,
                }
            })
        )
    }

    const openSpecialPerfumesModal=(modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                specialPerfumes:{
                    ...prevState.specialPerfumes,
                    [modalType]:true,
                }
            })
        )
    }

    const openSpecialBackgroundsModal=(modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                specialBackgrounds:{
                    ...prevState.specialBackgrounds,
                    [modalType]:true,
                }
            })
        )
    }




    const closeSpecialBackgroundsModal=(modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                specialBackgrounds:{
                    ...prevState.specialBackgrounds,
                    [modalType]:false,
                }
            })
        )
    }


    const closeSpecialPerfumesModal=(modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                specialPerfumes:{
                    ...prevState.specialPerfumes,
                    [modalType]:false,
                }
            })
        )
    }
    

    const closeRecommendedPerfumesModal=(modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                recommendedPerfumes:{
                    ...prevState.recommendedPerfumes,
                    [modalType]:false,
                }
            })
        )
    }

    const closeHomeSectionModal = (modalType)=>{
        setIsOpenModal(
            (prevState)=>(
                {
                    ...prevState,
                    home:{
                        ...prevState.home,
                        [modalType]:false,
                    }
                }
            )
        )
    }

  return (
    <div className='w-full p-20 flex flex-col gap-y-5'>

        <HomeSectionModal
            isOpenModal={isOpenModal}
            closeModal={closeHomeSectionModal}
            data={''}
        >

        </HomeSectionModal>

        <RecommendedPerfumesModal
            isOpenModal={isOpenModal}
            closeModal={closeRecommendedPerfumesModal}
            data={recommendedPerfumesData}
        >

        </RecommendedPerfumesModal>

        <SpecialBackgroundsModal
            isOpenModal={isOpenModal}
            closeModal={closeSpecialBackgroundsModal}
            data={specialBackgroundsData}
        >

        </SpecialBackgroundsModal>

        <SpecialPerfumesModal
            isOpenModal={isOpenModal}
            closeModal={closeSpecialPerfumesModal}
            data={specialPerfumesData}
        >

        </SpecialPerfumesModal>
        <h1 className='text-4xl'>Womens Page</h1>

        <div className='bg-black p-5 w-full flex flex-col gap-y-2 rounded-md '>

            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-3xl'>Home Section</h1>

                <div className='p-2 px-5 bg-[#323d4e] rounded-md flex flex-row gap-2 items-center cursor-pointer'
                    onClick={()=>openHomeSectionModal('addAnotherImage')}

                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                        <path d="M9 5.75712H5.14286V9.61426H3.85714V5.75712H0V4.4714H3.85714V0.614258H5.14286V4.4714H9V5.75712Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
                    </svg>
                    <span>Add another image </span>
                </div>
            </div>
            

            <div className='flex flex-row gap-2'>
                {headingImage.map((element,index)=>(
                    <div className='border-2 flex flex-col gap-4 p-3'>
                        <img src={element.image} alt="background" />
                        <div className='flex flex-row justify-between'>
                            <div className='border bg-[#282828] p-1 rounded-md cursor-pointer'>
                                <span className='text-sm'>Set as Image 1</span>
                            </div>

                            <div className=' bg-white text-black px-2 flex items-center rounded-md cursor-pointer'
                                onClick={()=>openHomeSectionModal('deleteImage')}
                            >
                                <span className='text-sm'>Delete</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        

        <div className='bg-black p-5 w-full flex flex-col gap-y-2 rounded-md'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-3xl'>Recommended perfumes</h1>

            </div>

            <div className='flex flex-row gap-2'>
              {recommendedPerfumes.map((element, index) => (
                <div key={index} className='border flex flex-col items-center gap-4 p-3 w-56 '>
                  {/* Image at the top */}
                  <div className='max-h-64 max-w-40'>
                    <img src={element.image} alt="background" className='w-full h-full' />
                  </div>

                  {/* Buttons at the bottom */}
                  <div className='flex flex-row justify-between mt-auto w-full'>
                    <div className='border bg-[#282828] rounded-md p-1 cursor-pointer'
                        onClick={()=>{
                            setRecommendedPerfumesData(element);
                            openRecommendedPerfumesModal('replaceImage')}}
                    >
                      <span className='text-sm'>Replace Image</span>
                    </div>

                    <div className='bg-white text-black px-2 rounded-md flex items-center cursor-pointer'
                        onClick={()=>openRecommendedPerfumesModal('deleteImage')}
                    >
                      <span className='text-sm'>Delete</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>
        
        

        <div className='bg-black p-5 w-full flex flex-col gap-y-2 rounded-md'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-3xl'>Specials</h1>

            </div>

            <div className='flex flex-row gap-2'>
              {specialPerfumes.map((element, index) => (
                <div key={index} className='border flex flex-col items-center gap-4 p-3 w-56 '>
                  {/* Image at the top */}
                  <div className='max-h-64 max-w-40'>
                    <img src={element.image} alt="background" className='w-full h-full' />
                  </div>

                  {/* Buttons at the bottom */}
                  <div className='flex flex-row justify-between mt-auto w-full'>
                    <div className='border bg-[#282828] rounded-md p-1 cursor-pointer'
                        onClick={()=>{
                            setSpecialPerfumesData(element);
                            openSpecialPerfumesModal('replaceImage')}}
                    >
                      <span className='text-sm'>Replace Image</span>
                    </div>

                    <div className='bg-white text-black px-2 rounded-md flex items-center cursor-pointer'

                        onClick={()=>{
                            setSpecialPerfumesData(element);
                            openSpecialPerfumesModal('deleteImage')}}
                    >
                      <span className='text-sm'>Delete</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

        </div>



        <div className='bg-black p-5 w-full flex flex-col gap-y-2 rounded-md '>

            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-3xl'>Special Backgrounds</h1>
            </div>
            

            <div className='flex flex-row gap-2'>
                {backgroundImages.map((element,index)=>(
                    <div className='border-2 flex flex-col gap-4 p-3'>
                        <img src={element.image} alt="background" />
                        <div className='flex flex-row justify-between'>
                            <div className='border bg-[#282828] p-1 px-7 rounded-md cursor-pointer'>
                                <span className='text-sm'>Set as Image 1</span>
                            </div>

                            <div className=' bg-white text-black px-7 flex items-center rounded-md cursor-pointer'
                                onClick={()=>{
                                    setSpecialBackgroundsData(element);
                                    openSpecialBackgroundsModal('deleteImage')}}
                            >
                                <span className='text-sm'>Delete</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        
        
    </div>
  )
}

export default Women