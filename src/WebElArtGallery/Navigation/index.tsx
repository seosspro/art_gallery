import React from 'react';
import cl from "classnames";

import {CommonClassProps} from "../types";

import style from './index.module.scss'

interface NavigationProps extends CommonClassProps {
    disabledPrev?: boolean
    disabledNext?: boolean
    onPrevClick: () => void
    onNextClick: () => void
}

const Navigation: React.FC<NavigationProps> = ({disabledPrev, disabledNext, onNextClick, onPrevClick, className}) => {
    return (
            <div className={cl(style.navigation, className)}>
                <button disabled={disabledPrev}
                        className={cl(style.navigationBtn, style.navigationBtnLeft)}
                        onClick={onPrevClick}>
                    Previous photo
                </button>
                <button
                        disabled={disabledNext}
                        className={cl(style.navigationBtn, style.navigationBtnRight)}
                        onClick={onNextClick}>
                    Next photo
                </button>
            </div>
    );
};

export default Navigation;
