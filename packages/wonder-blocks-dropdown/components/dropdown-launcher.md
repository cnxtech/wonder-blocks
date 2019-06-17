A DropdownLauncher allows various elements to be used as dropdown menus. In this example we use the IconButton to open a Dropown of items to select from.

```js
const React = require("react");
const {View} = require("@khanacademy/wonder-blocks-core");
const IconButton = require("@khanacademy/wonder-blocks-icon-button").default;
const {icons} = require("@khanacademy/wonder-blocks-icon");
const {StyleSheet} = require("aphrodite");

const dropdownItems = [
    <ActionItem
        label="Profile"
        href="http://khanacademy.org/profile"
        testId="profile"
    />,
    <ActionItem
        label="Teacher dashboard"
        href="http://khanacademy.org/coach/dashboard"
        testId="dashboard"
    />,
    <ActionItem
        label="Settings (onClick)"
        onClick={() => console.log("user clicked on settings")}
        testId="settings"
    />,
    <ActionItem
        label="Help"
        disabled={true}
        onClick={() => console.log("this item is disabled...")}
        testId="help"
    />,
    <ActionItem
        label="Feedback"
        disabled={true}
        href="/feedback"
        testId="feedback"
    />,
    <SeparatorItem />,
    <ActionItem
        label="Log out"
        href="http://khanacademy.org/logout"
        testId="logout"
    />,
];

<DropdownLauncher
    disabled={false}
    menuText="Betsy Appleseed"
    testId="teacher-menu"
    menuItems={dropdownItems}
>
    {(openDropdown) => (
        <IconButton
            //onClick={openDropdown}
            icon={icons.caretDown}
            aria-label="search"
        />
    )}
</DropdownLauncher>
```

In this example we use a Title component with a DropdownLauncher.

```js
const React = require("react");
const {View} = require("@khanacademy/wonder-blocks-core");
const IconButton = require("@khanacademy/wonder-blocks-icon-button").default;
const {icons} = require("@khanacademy/wonder-blocks-icon");
const {StyleSheet} = require("aphrodite");

const dropdownItems = [
    <ActionItem
        label="Profile"
        href="http://khanacademy.org/profile"
        testId="profile"
    />,
    <ActionItem
        label="Teacher dashboard"
        href="http://khanacademy.org/coach/dashboard"
        testId="dashboard"
    />,
    <ActionItem
        label="Settings (onClick)"
        onClick={() => console.log("user clicked on settings")}
        testId="settings"
    />,
    <ActionItem
        label="Help"
        disabled={true}
        onClick={() => console.log("this item is disabled...")}
        testId="help"
    />,
    <ActionItem
        label="Feedback"
        disabled={true}
        href="/feedback"
        testId="feedback"
    />,
    <SeparatorItem />,
    <ActionItem
        label="Log out"
        href="http://khanacademy.org/logout"
        testId="logout"
    />,
];

<View>
    <DropdownLauncher
        disabled={false}
        menuText="Betsy Appleseed"
        testId="teacher-menu"
        menuItems={dropdownItems}
    >
        {(openDropdown) => (
            <Title
                onClick={openDropdown}
                aria-label="search"
            >
            Hello, World!
            </Title>
        )}
    </DropdownLauncher>
</View>;
```