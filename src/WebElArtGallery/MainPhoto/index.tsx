import React from 'react';
import cl from 'classnames'

import {CommonClassProps, Photo} from "../types";

import style from './index.module.scss'

interface MainPhotoProps extends CommonClassProps {
    prevPhoto?: Photo
    nextPhoto?: Photo
    activePhoto: Photo
}

const MainPhoto: React.FC<MainPhotoProps> = ({prevPhoto, nextPhoto, activePhoto, className}) => (
        <div className={cl(className, style.mainPhoto)}>
            {prevPhoto &&
                <img className={style.mainPhotoImagePrev}
                     src={prevPhoto.src}
                     alt={prevPhoto.description}/>
            }
            <img className={style.mainPhotoImage}
                 src={activePhoto.src}
                 alt={activePhoto.description}/>
            {nextPhoto &&
                <img className={style.mainPhotoImageNext}
                     src={nextPhoto.src}
                     alt={nextPhoto.description}/>}
        </div>
);


export default MainPhoto;
