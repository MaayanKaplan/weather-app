import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Common/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Common/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: "Button",
};

export const White = Template.bind({});
White.args = {
  variant: "white",
  children: "White",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: "Link",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
  children: "Ghost",
};
