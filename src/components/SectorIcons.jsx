import React from 'react';

import lakeGif from "../../public/assets/gifs/lake.gif";
import riverGif from "../../public/assets/gifs/river.gif";
import wasteGif from "../../public/assets/gifs/waste.gif";
import waterDamGif from "../../public/assets/gifs/water-dam-animation-gif-download-14977124.mp4";
import wavesGif from "../../public/assets/gifs/waves.gif";

export const RiverWaterIcon = ({ className }) => (
  <img src={riverGif} alt="River water" className={className} />
);

export const LakeWaterIcon = ({ className }) => (
  <img src={lakeGif} alt="Lake or pond water" className={className} />
);

export const DamWaterIcon = ({ className }) => (
  <img src={waterDamGif} alt="Dam water" className={className} />
);

export const IndustrialWaterIcon = ({ className }) => (
  <img src={wasteGif} alt="Industrial water" className={className} />
);

export const SeaWaterIcon = ({ className }) => (
  <img src={wavesGif} alt="Sea water" className={className} />
);