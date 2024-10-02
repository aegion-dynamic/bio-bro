## Getting Started

- First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

- Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Storybook

- Storybook is a frontend workshop for building UI components and pages in isolation. It helps you develop and share hard-to-reach states and edge cases without needing to run your whole app. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.

#### 1. Install `storybook` in `NextJS` project:

```bash
npx storybook@latest init
# In a project without storybook
```

#### 2. Manual Migration for first time using the `storybook`:

```bash
npm install --save-dev @storybook/nextjs
```

- This pretty much installs the `storybook` for `NextJS` and sets up the necessary configurations.

#### 3. Project Setup (Which is already created for you in the project):

- `.storybook/`: Contains Storybook configuration files. The key file is main.js which now points to @storybook/nextjs builder, optimized for Next.js.
- `stories/`: Contains your story files (by default Storybook searches for .stories.@(js|jsx|ts|tsx|mdx) files).

#### 4. Writing your First Story (.stories.tsx):

- Creating a story in `storybook` is as simple as creating a file with the `.stories.js` extension in the `stories` directory.
- Checkout the `Button.tsx` component in the `components` directory.
- Create the accompanying Button.stories.tsx file:

```tsx
// components/Button.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// Define component metadata
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" }, // Offer 'primary'/'secondary' radio buttons in the control panel
      options: ["primary", "secondary"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story configuration
export const Default: Story = {
  args: {
    children: "Click me",
  },
};

// Create a Primary Story
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

// Create a Secondary Story
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};
```

- Here:

  - We use Meta from `@storybook/react` for improved TypeScript support.
  - `StoryObj` types your Story properly.
  - With `argTypes`, Storybook provides a radio button control for the variant prop in the UI.

#### 5. Run Storybook:

```bash
npm run storybook
```

- Storybook will typically run on http://localhost:6006/. Now you can:

  - View your components in isolation.
  - Test different states and variations using controls and args provided by Storybook.

- Checkout the `storybook` docs from [here](https://storybook.js.org/docs/writing-stories)
