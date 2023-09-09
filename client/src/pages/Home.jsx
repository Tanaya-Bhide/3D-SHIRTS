import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import state from '../store'; // Adjust the import path
import { CustomButton } from '../components';
function Home() {
    // Use the state object created with valtio
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./threejs.png'
                            alt='logo'
                            className='w-8 h-8 object-contain'
                        />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>
                                LETS <br className='xl:block hidden' /> DO IT
                            </h1>
                        </motion.div>
                        <motion.div className='flex flex-col gap-5'{...headContentAnimation}>
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Create your unique and exclusive shirts with our brand-new 3D customization tool
                                <strong> Unleash your imagination </strong> and define your new style.
                            </p>
                            <CustomButton type="filled" title="Customize it"
                                handleclick={() => state.intro = false} customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}

export default Home;
