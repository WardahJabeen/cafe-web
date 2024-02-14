import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import img1 from "../assets/img1.jpg"
import img5 from "../assets/shake.jpg"
import img6 from "../assets/mango_green_tea.jpg"

const Review = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5 bg-backgroundColor pb-10'>
            <h1 className='text-4xl font-semibold text-center pt-10 pb-20'>Customer's Review</h1>
            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                <ReviewCard img={img1} name="Wardah Jabeen" />
                <ReviewCard img={img5} name="Wardah Jabeen" />
                <ReviewCard img={img6} name="Wardah Jabeen" />
            </div>
        </div>
    )
}

export default Review