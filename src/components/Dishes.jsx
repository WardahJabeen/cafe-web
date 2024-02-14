import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/iced_latte.jpg"
import img3 from "../assets/iced_mocha.jpg"
import img4 from "../assets/juice.jpg"
import img5 from "../assets/shake.jpg"
import img6 from "../assets/mango_green_tea.jpg"

const Dishes = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
            <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>
                Drinks
            </h1>
            <div className='flex flex-wrap gap-8 justify-center'>
                <DishesCard img={img1} title="Milk Tea Boba" price="$6.99" />
                <DishesCard img={img2} title="Iced Latte" price="$7.99" />
                <DishesCard img={img3} title="Iced Mocha" price="$5.99" />
                <DishesCard img={img4} title="Orange Juice" price="$3.99" />
                <DishesCard img={img5} title="Milk Shake" price="$4.99" />
                <DishesCard img={img6} title="Mango Green Tea" price="$5.99" />
            </div>
        </div>

    )
}

export default Dishes