import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../Common/Input/Input";

export default {
  title: "Common/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  // type: "email",
  placeholder: "example@example.com",
};
export const Password = Template.bind({});
Password.args = {
  // type: "password",
  placeholder: "6 characters and digit numbers",
};
