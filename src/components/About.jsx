import React from 'react'
import img from "../assets/about.png"
import Button from '../layouts/Button'

const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 bg-backgroundColor mt-10'>
            <img className='max-w-[40%] pb-10' src={img} alt="img" />
            <div className='space-y-4 lg:pt-14 ml-20'>
                <h1 className='font-semibold text-4xl text-center md:text-start'>Why Choose Us?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum hic cum illum!
                    Voluptatibus esse maiores tempore in, nostrum temporibus? Similique deserunt
                    exercitationem deleniti excepturi cupiditate non nemo consequatur voluptatibus totam!
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum hic cum illum!
                    Voluptatibus esse maiores tempore in, nostrum temporibus? Similique deserunt
                    exercitationem deleniti excepturi cupiditate non nemo consequatur voluptatibus totam!
                </p>

                <div className='flex justify-center lg:justify-start'>
                    <Button title="Learn More" />
                </div>
            </div>
        </div>
    )
}

export default About