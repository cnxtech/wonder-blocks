// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-color
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import {StyleSheet} from "aphrodite";
import {View} from "@khanacademy/wonder-blocks-core";
import Swatch from "./docutils/swatch.js";
import Color from "./index.js";

describe("wonder-blocks-color", () => {
    it("example 1", () => {
        const styles = StyleSheet.create({
            container: {
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gridAutoFlow: "row",
            },
        });
        const example = (
            <View style={styles.container}>
                <Swatch
                    color={Color.blue}
                    name="blue"
                    use="text"
                    desc="Actionable. Used to indicate actionable items like links and buttons."
                />
                <Swatch
                    color={Color.purple}
                    name="purple"
                    use="text"
                    desc="Used to indicate Mastery."
                />
                <Swatch
                    color={Color.gold}
                    name="gold"
                    segments={1}
                    desc="Used as an accent for celebratory moments. If using for icons, accompany with descriptive text."
                />
                <Swatch
                    color={Color.green}
                    name="green"
                    use="icons"
                    desc="Affirmative. Used to indicate success states and correctness. Do not use for text."
                />
                <Swatch
                    color={Color.red}
                    name="red"
                    use="text"
                    desc="Negative. Used for errors and destructive actions."
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 2", () => {
        const styles = StyleSheet.create({
            container: {
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gridAutoFlow: "row",
            },
        });
        const example = (
            <View style={styles.container}>
                <Swatch
                    color={Color.offBlack}
                    name="offBlack"
                    use="text"
                    desc="Primary text color. Can also used for links in lists."
                />
                <Swatch
                    color={Color.offBlack64}
                    name="offBlack64"
                    use="text"
                    desc="Secondary text color and modal backdrop color."
                />
                <Swatch
                    color={Color.offBlack50}
                    name="offBlack50"
                    desc="Fieldset borders"
                    segments={1}
                />
                <Swatch
                    color={Color.offBlack32}
                    name="offBlack32"
                    desc="Disabled states"
                    segments={1}
                />
                <Swatch
                    color={Color.offBlack16}
                    name="offBlack16"
                    desc="Hairline color"
                    segments={1}
                />
                <Swatch
                    color={Color.offBlack8}
                    name="offBlack8"
                    desc="Shadow color"
                    segments={1}
                />
                <Swatch
                    color={Color.offWhite}
                    name="offWhite"
                    desc="Only used as a secondary background color"
                    segments={1}
                />
                <Swatch
                    color={Color.darkBlue}
                    name="white"
                    desc="Primary background color and primary text color on colored backgrounds."
                    use="text"
                    segments={2}
                />
                <Swatch
                    color={Color.darkBlue}
                    name="white64"
                    desc="Secondary text color on colored backgrounds, and hairline color on colored backgrounds"
                    use="text"
                    segments={1}
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("example 3", () => {
        const styles = StyleSheet.create({
            container: {
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gridAutoFlow: "row",
            },
        });
        const example = (
            <View style={styles.container}>
                <Swatch
                    color={Color.darkBlue}
                    name="darkBlue"
                    segments={1}
                    desc="Primary brand color. Can be used as a background color in headers and illustrative areas."
                />
                <Swatch
                    color={Color.lightBlue}
                    name="lightBlue"
                    segments={1}
                    desc="Secondary brand color. This is only accessible on Dark Blue, so use lightly."
                />
                <View
                    style={{
                        width: 256,
                    }}
                />
                <Swatch
                    color={Color.teal}
                    name="teal"
                    segments={1}
                    desc="Secondary brand color. This is only accessible on Dark Blue, so use lightly."
                />
                <Swatch
                    color={Color.pink}
                    name="pink"
                    segments={1}
                    desc="Secondary brand color."
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
