import type { Meta, StoryObj } from "@storybook/react";
import Counter from "../components/Counter";

const meta = {
  title: "Example/Counter",
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
