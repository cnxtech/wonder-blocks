// @flow
import React from "react";
import {StyleSheet} from "aphrodite";

import {processStyleList} from "../util/util.js";
import type {TextTag} from "../util/types.js";

type Props = {
    style?: any,
    tag: TextTag,
    children?: any,
};

const isHeaderRegex = /^h[1-6]$/;

const styles = StyleSheet.create({
    text: {
        // Disable subpixel antialiasing on Mac desktop for consistency of
        // rendering with mobile and Sketch (neither of which support it).
        // See https://bjango.com/articles/subpixeltext/ for more details.
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
    },
    header: {
        // User agent stylesheets add vertical margins to header tags by
        // default. We prefer to be more deliberate in our spacing instead.
        marginTop: 0,
        marginBottom: 0,
    },
});

export default class Text extends React.Component<Props> {
    static defaultProps = {
        tag: "span",
    };

    render() {
        const isHeader = isHeaderRegex.test(this.props.tag);
        const {className, style} = processStyleList([
            styles.text,
            isHeader && styles.header,
            this.props.style,
        ]);

        const Tag = this.props.tag;

        return (
            <Tag style={style} className={className}>
                {this.props.children}
            </Tag>
        );
    }
}