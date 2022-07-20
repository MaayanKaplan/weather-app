import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from "../Common/Switch";
import { IconDarkMoon, IconDarkSun } from "../Common/Icon";

export default {
  title: "Common/Switch",
  component: Switch,
  argsTypes: {},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Theme = Template.bind({});
Theme.args = {
  id: "theme-id",
  left: <IconDarkMoon />,
  right: <IconDarkSun />,
};
export const Degrees = Template.bind({});
Degrees.args = {
  id: "degrees-id",
  left: "F",
  right: "C",
};
