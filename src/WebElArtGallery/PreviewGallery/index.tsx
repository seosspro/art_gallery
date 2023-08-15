import React, {useEffect, useMemo, useRef} from 'react';
import cl from "classnames";

import {CommonClassProps, Photo} from "../types";

import style from './index.module.scss'


interface PreviewGalleryProps extends CommonClassProps {
    activePhotoIndex: number
    photos: Photo[]
}

const PreviewGallery: React.FC<PreviewGalleryProps> = ({activePhotoIndex, photos, className}) => {
    if (!photos.length) return null

    const previewContainer = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!previewContainer.current) return

        previewContainer.current.style.transform = `translate3d(-${activePhotoIndex * 164}px, 0, 0)`

    }, [activePhotoIndex]);

    return <div className={cl(style.previewGallery, className)}>
        {useMemo(() => (
                <ul className={style.previewGalleryTrack} ref={previewContainer}>
                    {
                        photos.map(photo => (
                                <li key={photo.id}
                                    className={style.previewGalleryPreview}
                                >
                                    <img src={photo.preview}
                                         alt={photo.description}
                                         className={style.previewGalleryImage}
                                    />
                                </li>
                        ))
                    }
                </ul>
        ), [])}

        <div className={style.previewGalleryCover}>
            {activePhotoIndex + 1} / {photos.length}
        </div>
    </div>
}


export default PreviewGallery;
