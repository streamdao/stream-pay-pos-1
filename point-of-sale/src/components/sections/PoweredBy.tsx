import React, { FC } from 'react';
import { StreamPayLogo } from '../images/StreamPayLogo';
import * as css from './PoweredBy.module.pcss';

export const PoweredBy: FC = () => {
    return (
        <div className={css.root}>
            Powered by <StreamPayLogo />
        </div>
    );
};
