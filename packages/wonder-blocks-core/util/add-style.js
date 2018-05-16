// @flow
import * as React from "react";
import propTypes from "prop-types";

import {processStyleList} from "./util.js";

import type {GridSize} from "./util.js";

export function addStyle<T: Object>(
    Component: React.ComponentType<T> | string,
    defaultStyle?: any,
): React.ComponentType<T & {style: any}> {
    function WrapperComponent(
        props: T & {style: any},
        {gridSize}: {gridSize: GridSize},
    ) {
        const {style, ...otherProps} = props;
        const {className, style: inlineStyles} = processStyleList(
            [defaultStyle, style],
            gridSize,
        );
        return (
            <Component
                {...otherProps}
                className={className}
                style={inlineStyles}
            />
        );
    }

    WrapperComponent.contextTypes = {
        gridSize: propTypes.string,
    };

    return WrapperComponent;
}