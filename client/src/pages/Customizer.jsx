import React from 'react';
import { AIpicker, Colorpicker, Tab, Filepicker, CustomButton } from "../components";
import { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import { AnimatePresence, motion } from 'framer-motion';
import state from '../store';
import config from '../config/config';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
function Customizer() {
  const snap = useSnapshot(state);
  //show tab content depending on active tab
  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setgeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState({ logoShirt: true, stylishShirt: false });
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <Colorpicker />
      case "filepicker":
        return <Filepicker />
      case "aipicker":
        return <AIpicker />
      default:
        return null;
    }
  }
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation('left')} >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (<Tab key={tab.name} tab={tab} handleclick={() => { setActiveEditorTab(tab.name) }} />))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation} >
            <CustomButton type="filled" title="go back" handleclick={() => state.intro = true} customstyles="w-fit px-4 py-2.5 font-bold text-sm" />
          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={""}
                handleClick={""}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer

