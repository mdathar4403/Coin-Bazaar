import React from 'react'
import Navbar from '../Navbar/Navbar'

const Messages = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="container7  px-6 mx-auto">

                {/* <!-- Section: Design Block --> */}
                <section class="mb-32 text-gray-800">
                    <h5 class="text-xl font-semibold text-center mb-10 md:mb-6">Comments: 3</h5>

                    {/* <!-- Comment --> */}
                    <div class="flex flex-wrap mb-12 md:mb-0">
                        <div class="grow-0 shrink-0 basis-auto w-2/12">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg" class="w-full shadow-lg rounded-lg mb-6"
                                alt="" />
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
                            <p class="font-semibold mb-3">Marta Dolores</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                                inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                                Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                            </p>
                        </div>
                    </div>

                    {/* <!-- Comment --> */}
                    <div class="flex flex-wrap mb-12 md:mb-0">
                        <div class="grow-0 shrink-0 basis-auto w-2/12">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg" class="w-full shadow-lg rounded-lg mb-6"
                                alt="" />
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
                            <p class="font-semibold mb-3">Valeria Groove</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                                inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                                Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                            </p>
                        </div>
                    </div>

                    {/* <!-- Comment --> */}
                    <div class="flex flex-wrap">
                        <div class="grow-0 shrink-0 basis-auto w-2/12">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" class="w-full shadow-lg rounded-lg mb-6"
                                alt="" />
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-10/12 pl-4 md:pl-6">
                            <p class="font-semibold mb-3">Antonia Velez</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                                inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                                Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Messages
