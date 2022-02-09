import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomLabel from '../../components/CustomLabel';

export default {
  title: 'UI/CustomLabel',
  conmponent: CustomLabel,
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] }
  }
} as ComponentMeta<typeof CustomLabel>

const Template: ComponentStory<typeof CustomLabel> = (args) => <CustomLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: "Basic",
  allCaps: false
}

export const AllCaps = Template.bind({})
AllCaps.args = {
  label: "AllCaps",
  allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Secondary",
  size: 'normal',
  color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  label: "Tertiary",
  size: 'normal',
  color: 'tertiary'
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
  label: "CustomFontColor",
  size: 'h1',
  fontColor: '#5517AC'
}
