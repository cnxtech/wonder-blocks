// @flow
import * as React from "react";
import {StyleSheet} from "aphrodite";

import Color from "wonder-blocks-color";
import {View} from "wonder-blocks-core";

import type {ModalElement} from "../util/types.js";

type Props = {
    children: ModalElement,
    onCloseModal: () => void,
};

/**
 * A private component used by ModalLauncher. This is the fixed-position
 * container element that gets mounted outside the DOM. It overlays the modal
 * content (provided as `children`) over the content, with a gray backdrop
 * behind it.
 *
 * This component is also responsible for cloning the provided modal `children`,
 * and adding an `onClickCloseButton` prop that will call `onCloseModal`. If an
 * `onClickCloseButton` prop is already provided, the two are merged.
 */
export default class ModalBackdrop extends React.Component<Props> {
    /**
     * When the user clicks on the gray backdrop area (i.e., the click came
     * _directly_ from the positioner, not bubbled up from its children), close
     * the modal.
     */
    _handleClick = (e: SyntheticEvent<>) => {
        // Was the lowest-level click target (`e.target`) the positioner element
        // (`e.currentTarget`)?
        if (e.target === e.currentTarget) {
            this.props.onCloseModal();
        }
    };

    render() {
        const children = this.props.children;
        const clonedChildren = React.cloneElement(children, {
            onClickCloseButton: () => {
                if (typeof children.props.onClickCloseButton === "function") {
                    children.props.onClickCloseButton();
                }
                this.props.onCloseModal();
            },
        });

        return (
            <View style={styles.modalPositioner} onClick={this._handleClick}>
                {clonedChildren}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modalPositioner: {
        position: "fixed",
        left: 0,
        top: 0,

        // This z-index is copied from the Khan Academy webapp.
        //
        // TODO(mdr): Should we keep this in a constants file somewhere? Or
        //     not hardcode it at all, and provide it to Wonder Blocks via
        //     configuration?
        zIndex: 1080,

        width: "100%",
        height: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        // If the modal ends up being too big for the viewport (e.g., the min
        // height is triggered), add another scrollbar specifically for
        // scrolling modal content.
        //
        // TODO(mdr): The specified behavior is that the modal should scroll
        //     with the rest of the page, rather than separately, if overflow
        //     turns out to be necessary. That sounds hard to do; punting for
        //     now!
        overflow: "auto",

        background: Color.offBlack64,
    },
});