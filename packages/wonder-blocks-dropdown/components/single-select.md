### Single select with placeholder and set widths

This single select has a starting placeholder and a set minWidth and maxWidth.
Notice how the dropdown is always at least as wide as the opener. Also, when
the first item is chosen, the text in the opener would exceed the maxWidth. It
ellipses instead.

```js
import {SingleSelect, OptionItem} from "@khanacademy/wonder-blocks-dropdown";
import {View} from "@khanacademy/wonder-blocks-core";
import {StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    setWidth: {
        minWidth: 170,
        maxWidth: 190,
    },
});

class ExampleWithPlaceholder extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedValue: null,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selected) {
        console.log(`${selected} was selected!`);
        this.setState({
            selectedValue: selected,
        });
    }

    render() {
        return <SingleSelect
            onChange={this.handleChange}
            onToggle={(opened) => console.log('toggle: ', opened)}
            placeholder="Choose a fruit"
            selectedValue={this.state.selectedValue}
            style={styles.setWidth}
            testId="fruit-select"
        >
            <OptionItem label="Vine-ripened tomatoes" value="tomato" testId="tomato" />
            <OptionItem label="Watermelon" value="watermelon" testId="watermelon" />
            <OptionItem label="Strawberry" value="strawberry" testId="strawberry" />
            {false && <OptionItem label="Other" value="other" testId="other" />}
        </SingleSelect>;
    }
}

<View style={styles.row}>
    <ExampleWithPlaceholder />
</View>
```

### Single select with custom dropdown style

This example shows how we can add custom styles to the dropdown.

```js
import {SingleSelect, OptionItem} from "@khanacademy/wonder-blocks-dropdown";
import {View} from "@khanacademy/wonder-blocks-core";
import {StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    setWidth: {
        minWidth: 170,
        maxWidth: 190,
    },
    dropdown: {
        maxHeight: 240,
    },
});

class ExampleWithDropdownStyles extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedValue: null,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selected) {
        console.log(`${selected} was selected!`);
        this.setState({
            selectedValue: selected,
        });
    }

    render() {
        return <SingleSelect
            onChange={this.handleChange}
            placeholder="Choose a pet"
            selectedValue={this.state.selectedValue}
            style={styles.setWidth}
        >
            <OptionItem label="Cat" value="1" />
            <OptionItem label="Dog" value="2" />
            <OptionItem label="Goldfish" value="3" />
            <OptionItem label="Hamster" value="4" />
            <OptionItem label="Rabbit" value="5" />
            <OptionItem label="Rock" value="6" />
            <OptionItem label="Snake" value="7" />
            <OptionItem label="Tarantula" value="8" />
        </SingleSelect>;
    }
}

<View style={styles.row}>
    <ExampleWithDropdownStyles />
</View>
```

### Single select with starting selected item and disabled item

This select starts with a starting selected item. One of the items is disabled
and thus cannot be selected.

```js
import {SingleSelect, OptionItem} from "@khanacademy/wonder-blocks-dropdown";
import {View} from "@khanacademy/wonder-blocks-core";
import {StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
});

class ExampleWithStartingSelection extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedValue: "banana",
        };
        // Styleguidist doesn't support arrow functions in class field properties
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selected) {
        console.log(`${selected} was selected!`);
        this.setState({
            selectedValue: selected,
        });
    }

    render() {
        return <SingleSelect
            onChange={this.handleChange}
            placeholder="Choose a juice"
            selectedValue={this.state.selectedValue}
        >
            <OptionItem label="Banana juice" value="banana" />
            <OptionItem label="Guava juice" value="guava" disabled />
            <OptionItem label="White grape juice" value="grape" />
        </SingleSelect>;
    }
}

<View style={styles.row}>
    <ExampleWithStartingSelection />
</View>
```

### Disabled select

This select is disabled.
```js
import {SingleSelect, OptionItem} from "@khanacademy/wonder-blocks-dropdown";
import {View} from "@khanacademy/wonder-blocks-core";
import {StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
});

class DisabledExample extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedValue: "banana",
        };
        // Styleguidist doesn't support arrow functions in class field properties
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selected) {
        console.log(`${selected} was selected!`);
        this.setState({
            selectedValue: selected,
        });
    }

    render() {
        return <SingleSelect
            disabled={true}
            onChange={this.handleChange}
            placeholder="Choose a juice"
            selectedValue={this.state.selectedValue}
        >
            <OptionItem label="Banana juice" value="banana" />
            <OptionItem label="Guava juice" value="guava" disabled />
            <OptionItem label="White grape juice" value="grape" />
        </SingleSelect>;
    }
}

<View style={styles.row}>
    <DisabledExample />
</View>
```

### Select on dark background, right-aligned

This single select is on a dark background and is also right-aligned.

```js
import {SingleSelect, OptionItem} from "@khanacademy/wonder-blocks-dropdown";
import Color from "@khanacademy/wonder-blocks-color";
import {View} from "@khanacademy/wonder-blocks-core";
import {StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    darkBackgroundWrapper: {
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: Color.darkBlue,
        width: 350,
        height: 200,
        paddingRight: 10,
        paddingTop: 10,
    },
});

class LightRightAlignedExample extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedValue: null,
        };
        // Styleguidist doesn't support arrow functions in class field properties
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selected) {
        console.log(`${selected} was selected!`);
        this.setState({
            selectedValue: selected,
        });
    }

    render() {
        return <SingleSelect
            alignment="right"
            light={true}
            onChange={this.handleChange}
            placeholder="Choose a drink"
            selectedValue={this.state.selectedValue}
        >
            <OptionItem label="Regular milk tea with boba" value="regular" />
            <OptionItem label="Wintermelon milk tea with boba" value="wintermelon" />
            <OptionItem label="Taro milk tea, half sugar" value="taro" />
        </SingleSelect>;
    }
}

<View style={styles.row}>
    <View style={styles.darkBackgroundWrapper}>
        <LightRightAlignedExample />
    </View>
</View>

```

### Empty menus are disabled automatically

```js
import {SingleSelect} from "@khanacademy/wonder-blocks-dropdown";
import {View} from "@khanacademy/wonder-blocks-core";
import {StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
});

<View style={styles.row}>
    <SingleSelect placeholder="empty" />
</View>
```

### Accessibility

If you need to associate this component with another element (e.g. `<label>`),
make sure to pass the `aria-labelledby` and/or `id` props to the `SingleSelect` component.
This way, the `opener` will receive this value and it will associate both elements.

```js
import {SingleSelect, OptionItem} from "@khanacademy/wonder-blocks-dropdown";
import {View} from "@khanacademy/wonder-blocks-core";
import {LabelLarge} from "@khanacademy/wonder-blocks-typography";

<View>
    <LabelLarge
        tag="label"
        id="label-for-single-select"
        htmlFor="unique-single-select"
    >
        Associated label element
    </LabelLarge>
    <SingleSelect
        aria-labelledby="label-for-single-select"
        id="unique-single-select"
        placeholder="Accessible SingleSelect"
    >
        <OptionItem label="some value" value="" />
    </SingleSelect>
</View>
```

### Example: Opening a SingleSelect programmatically

Sometimes you'll want to trigger a dropdown programmatically. This can be done by
setting a value to the `opened` prop (`true` or `false`). In this situation the `SingleSelect` is a
controlled component. The parent is responsible for managing the opening/closing
of the dropdown when using this prop.

This means that you'll also have to update `opened` to the value triggered by
the `onToggle` prop.

```js
import {OptionItem} from "@khanacademy/wonder-blocks-dropdown";
import Button from "@khanacademy/wonder-blocks-button";
import {View} from "@khanacademy/wonder-blocks-core";
import {Strut} from "@khanacademy/wonder-blocks-layout";
import Spacing from "@khanacademy/wonder-blocks-spacing";
import {StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    }
});

class ControlledSingleSelectExample extends React.Component {
    constructor() {
        super();
        this.state = {
            opened: false,
            selectedValue: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
    }

    handleChange(selected) {
        this.setState({
            selectedValue: selected,
        });
    }

    handleToggleMenu(opened) {
        this.setState({
            opened,
        });
    }

    render() {
        return (
            <View style={styles.row}>
                <SingleSelect
                    opened={this.state.opened}
                    onToggle={this.handleToggleMenu}
                    onChange={this.handleChange}
                    selectedValue={this.state.selectedValue}
                    placeholder="Choose"
                >
                    <OptionItem label="item 1" value="1" />
                    <OptionItem label="item 2" value="2" />
                    <OptionItem label="item 3" value="3" />
                </SingleSelect>
                <Strut size={Spacing.medium} />
                <Button onClick={() => this.handleToggleMenu(true)}>
                    Open SingleSelect programatically
                </Button>
            </View>
        );
    }
}

<ControlledSingleSelectExample />
```