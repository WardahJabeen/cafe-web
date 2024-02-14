import React from 'react'
import Button from "../layouts/Button"

const Home = () => {
    return (
        <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat">
            <div className="w-full lg:w-2/3 space-y-5">
                <h1 className='text-backgoundColor font-semibold text-6xl'>Elevate your inner cafe with eveery bite! </h1>
                <p className='text-brightColor'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, hic cum facilis quibusdam alias suscipit, labore perferendis saepe quae incidunt reiciendis doloribus deleniti ducimus accusamus! Rem ullam magnam ex odio.
                </p>
                <div className='lg:pl-44'>
                    <Button title="Order Now" />
                </div>
            </div>
        </div>
    )
}

export default Home