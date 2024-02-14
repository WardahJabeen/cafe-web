import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/iced_latte.jpg"
import img3 from "../assets/iced_mocha.jpg"
const Menu = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pb-10'>
            <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'> Premium Menu </h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                <DishesCard img={img1} title="Delicious Dish" price="$6.99" />
                <DishesCard img={img2} title="Delicious Dish" price="$7.99" />
                <DishesCard img={img3} title="Delicious Dish" price="$5.99" />
            </div>
        </div>
    )
}

export default Menu