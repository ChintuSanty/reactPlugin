# elementor-react-ui

A comprehensive React UI component library inspired by the Elementor WordPress plugin. Build beautiful, customizable web UIs with 25 production-ready components.

[![npm version](https://badge.fury.io/js/elementor-react-ui.svg)](https://www.npmjs.com/package/elementor-react-ui)
[![GitHub](https://img.shields.io/github/stars/ChintuSanty/reactPlugin?style=social)](https://github.com/ChintuSanty/reactPlugin)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Components](#components)
  - [Heading](#heading)
  - [Button](#button)
  - [ImageWidget](#imagewidget)
  - [Accordion](#accordion)
  - [Tabs](#tabs)
  - [Carousel](#carousel)
  - [Gallery](#gallery)
  - [Counter](#counter)
  - [ProgressBar](#progressbar)
  - [IconBox](#iconbox)
  - [ImageBox](#imagebox)
  - [Testimonial](#testimonial)
  - [Alert](#alert)
  - [Divider](#divider)
  - [Spacer](#spacer)
  - [VideoWidget](#videowidget)
  - [SocialIcons](#socialicons)
  - [IconList](#iconlist)
  - [Card](#card)
  - [Grid](#grid)
  - [Hero](#hero)
  - [Navbar](#navbar)
  - [Footer](#footer)
  - [Modal](#modal)
  - [Toast](#toast)
- [Hooks](#hooks)
- [Utilities](#utilities)
- [TypeScript](#typescript)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

```bash
npm install elementor-react-ui santycss
```

or with yarn:

```bash
yarn add elementor-react-ui santycss
```

### CSS Setup

This library uses [santycss](https://www.npmjs.com/package/santycss) for styling. Import the CSS once in your app entry point:

```tsx
import 'santycss/css';
```

Or via CDN in your `index.html`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/santycss/dist/santy.css">
```

**Peer dependencies** (React 17+ required):

```bash
npm install react react-dom
```

---

## Quick Start

```tsx
import React from 'react';
import { Heading, Button, Card, Hero } from 'elementor-react-ui';

function App() {
  return (
    <div>
      <Hero
        title="Welcome to My App"
        subtitle="Powered by elementor-react-ui"
        description="Build stunning UIs with Elementor-inspired components."
        ctaButtons={[
          { text: 'Get Started', href: '/start', variant: 'primary' },
          { text: 'Learn More', href: '/docs', variant: 'outline' },
        ]}
      />
      <Heading text="Our Features" level={2} align="center" color="#1a1a2e" />
      <Card
        title="Beautiful Components"
        description="25 fully customizable components at your fingertips."
        hoverEffect
      />
    </div>
  );
}
```

---

## Components

### Heading

Renders an HTML heading (h1-h6) with full typographic control.

```tsx
import { Heading } from 'elementor-react-ui';

// Basic usage
<Heading text="Hello World" level={1} />

// Full customization
<Heading
  text="Custom Heading"
  level={2}
  color="#4A90E2"
  fontSize="2.5rem"
  fontWeight="700"
  align="center"
  letterSpacing="0.05em"
  lineHeight="1.2"
  fontFamily="'Georgia', serif"
  textTransform="uppercase"
  textDecoration="underline"
  margin="1rem 0"
  padding="0.5rem"
  className="my-heading"
  style={{ borderBottom: '2px solid #4A90E2' }}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `'Heading Text'` | The heading content |
| `level` | `1\|2\|3\|4\|5\|6` | `2` | HTML heading level |
| `color` | `string` | `'#333333'` | Text color |
| `fontSize` | `string` | - | Font size (CSS value) |
| `fontWeight` | `string\|number` | `'600'` | Font weight |
| `align` | `'left'\|'center'\|'right'\|'justify'` | `'left'` | Text alignment |
| `letterSpacing` | `string` | - | Letter spacing |
| `lineHeight` | `string\|number` | - | Line height |
| `fontFamily` | `string` | - | Font family |
| `textTransform` | `'none'\|'uppercase'\|'lowercase'\|'capitalize'` | - | Text transform |
| `textDecoration` | `string` | - | Text decoration |
| `margin` | `string` | - | Margin |
| `padding` | `string` | - | Padding |
| `className` | `string` | `''` | Additional CSS class |
| `style` | `CSSProperties` | `{}` | Inline style overrides |

---

### Button

A versatile button component with multiple variants, sizes, icon support, and link mode.

```tsx
import { Button } from 'elementor-react-ui';

// Primary button
<Button text="Click Me" variant="primary" />

// Secondary
<Button text="Secondary" variant="secondary" size="lg" />

// Outline
<Button text="Learn More" variant="outline" />

// Ghost
<Button text="Cancel" variant="ghost" />

// Link style
<Button text="Visit Site" variant="link" href="https://example.com" target="_blank" />

// With icon
<Button text="Upload" icon="📁" iconPosition="left" size="md" />

// Full width + loading
<Button text="Submitting..." fullWidth loading />

// Custom colors
<Button
  text="Custom"
  variant="primary"
  color="#fff"
  backgroundColor="#e91e63"
  borderRadius="9999px"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `'Click Me'` | Button label |
| `variant` | `'primary'\|'secondary'\|'outline'\|'ghost'\|'link'` | `'primary'` | Visual variant |
| `size` | `'xs'\|'sm'\|'md'\|'lg'\|'xl'` | `'md'` | Button size |
| `icon` | `ReactNode` | - | Icon element |
| `iconPosition` | `'left'\|'right'` | `'left'` | Icon placement |
| `href` | `string` | - | Renders as anchor tag |
| `onClick` | `function` | - | Click handler |
| `color` | `string` | - | Text/icon color |
| `backgroundColor` | `string` | - | Background color override |
| `borderRadius` | `string` | `'6px'` | Border radius |
| `fullWidth` | `boolean` | `false` | Stretch to full width |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Shows spinner |
| `target` | `string` | `'_self'` | Link target |
| `type` | `'button'\|'submit'\|'reset'` | `'button'` | Button type attribute |

---

### ImageWidget

Displays an image with hover effects, captions, and optional link wrapping.

```tsx
import { ImageWidget } from 'elementor-react-ui';

// Basic
<ImageWidget src="https://picsum.photos/800/400" alt="A landscape" />

// With caption and link
<ImageWidget
  src="https://picsum.photos/800/400"
  alt="Scenic view"
  caption="Photo by John Doe"
  link="https://example.com"
  linkTarget="_blank"
  borderRadius="12px"
  hoverEffect="zoom"
  boxShadow="0 8px 30px rgba(0,0,0,0.12)"
/>

// Grayscale on hover
<ImageWidget
  src="https://picsum.photos/800/400"
  alt="Photo"
  width="100%"
  height="300px"
  objectFit="cover"
  hoverEffect="grayscale"
  borderRadius="8px"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | required | Image source URL |
| `alt` | `string` | `''` | Alt text |
| `width` | `string\|number` | `'100%'` | Image width |
| `height` | `string\|number` | `'auto'` | Image height |
| `objectFit` | `string` | `'cover'` | CSS object-fit |
| `borderRadius` | `string` | `'0'` | Border radius |
| `caption` | `string` | - | Caption text below image |
| `link` | `string` | - | URL to link to |
| `linkTarget` | `'_blank'\|'_self'` | `'_self'` | Link target |
| `hoverEffect` | `'none'\|'zoom'\|'grayscale'\|'blur'\|'brightness'\|'opacity'` | `'none'` | Hover animation |
| `boxShadow` | `string` | - | Box shadow |

---

### Accordion

Expandable/collapsible content panels.

```tsx
import { Accordion } from 'elementor-react-ui';

const items = [
  {
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces.',
  },
  {
    title: 'What is TypeScript?',
    content: 'TypeScript is a strongly typed superset of JavaScript.',
    icon: '📘',
  },
];

// Basic
<Accordion items={items} />

// Allow multiple open
<Accordion items={items} allowMultiple defaultOpen={['acc-0']} />

// Bordered with plus icon
<Accordion
  items={items}
  bordered
  separated
  icon="plus"
  activeColor="#7B68EE"
/>

// Arrow icon, custom styles
<Accordion
  items={items}
  icon="arrow"
  iconPosition="right"
  activeColor="#e91e63"
  headerStyle={{ fontFamily: 'Georgia, serif' }}
  onChange={(openIds) => console.log('Open:', openIds)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItem[]` | required | Array of accordion items |
| `allowMultiple` | `boolean` | `false` | Allow multiple panels open |
| `defaultOpen` | `string[]` | `[]` | IDs of initially open panels |
| `icon` | `'plus'\|'arrow'\|'chevron'\|ReactNode` | `'chevron'` | Toggle icon |
| `iconPosition` | `'left'\|'right'` | `'right'` | Icon side |
| `bordered` | `boolean` | `false` | Add border to panels |
| `separated` | `boolean` | `false` | Add gap between panels |
| `activeColor` | `string` | `'#4A90E2'` | Active panel accent color |
| `onChange` | `(openIds: string[]) => void` | - | Called when panels toggle |

---

### Tabs

Tabbed navigation with horizontal/vertical orientation and multiple visual styles.

```tsx
import { Tabs } from 'elementor-react-ui';

const tabs = [
  { label: 'Overview', content: <p>Overview content here...</p> },
  { label: 'Features', content: <p>Features list here...</p>, icon: '⚡' },
  { label: 'Pricing', content: <p>Pricing table here...</p> },
];

// Default
<Tabs tabs={tabs} />

// Pills style
<Tabs tabs={tabs} tabStyle="pills" activeColor="#7B68EE" />

// Underline style
<Tabs tabs={tabs} tabStyle="underline" />

// Boxed style
<Tabs tabs={tabs} tabStyle="boxed" />

// Vertical orientation
<Tabs
  tabs={tabs}
  orientation="vertical"
  tabStyle="pills"
  onChange={(id) => console.log('Active tab:', id)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabItem[]` | required | Array of tab definitions |
| `defaultTab` | `string` | First tab | Initially active tab ID |
| `orientation` | `'horizontal'\|'vertical'` | `'horizontal'` | Tab layout direction |
| `tabStyle` | `'default'\|'pills'\|'underline'\|'boxed'` | `'default'` | Visual style |
| `activeColor` | `string` | `'#4A90E2'` | Active tab color |
| `onChange` | `(tabId: string) => void` | - | Tab change callback |

---

### Carousel

A responsive slider with autoplay, prev/next arrows, and dot indicators.

```tsx
import { Carousel } from 'elementor-react-ui';

const slides = [
  { content: <img src="slide1.jpg" alt="Slide 1" style={{ width: '100%' }} /> },
  { content: <img src="slide2.jpg" alt="Slide 2" style={{ width: '100%' }} /> },
  { content: <img src="slide3.jpg" alt="Slide 3" style={{ width: '100%' }} /> },
];

// Basic
<Carousel items={slides} />

// Autoplay
<Carousel
  items={slides}
  autoplay
  autoplaySpeed={4000}
  speed={400}
  showDots
  showArrows
/>

// Multiple slides visible
<Carousel
  items={slides}
  slidesToShow={2}
  showDots
  arrowColor="#e91e63"
  dotColor="#e91e63"
  onChange={(index) => console.log('Current slide:', index)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `CarouselItem[]` | required | Slide items |
| `autoplay` | `boolean` | `false` | Auto-advance slides |
| `autoplaySpeed` | `number` | `3000` | Autoplay interval (ms) |
| `showArrows` | `boolean` | `true` | Show prev/next arrows |
| `showDots` | `boolean` | `true` | Show dot indicators |
| `slidesToShow` | `number` | `1` | Visible slides at once |
| `infinite` | `boolean` | `true` | Infinite loop |
| `speed` | `number` | `300` | Transition speed (ms) |
| `arrowColor` | `string` | `'#4A90E2'` | Arrow color |
| `dotColor` | `string` | `'#4A90E2'` | Active dot color |
| `onChange` | `(index: number) => void` | - | Slide change callback |

---

### Gallery

A responsive image grid with lightbox and hover effects.

```tsx
import { Gallery } from 'elementor-react-ui';

const images = [
  { src: 'https://picsum.photos/800/600?random=1', alt: 'Photo 1', caption: 'Mountain View' },
  { src: 'https://picsum.photos/800/600?random=2', alt: 'Photo 2' },
  { src: 'https://picsum.photos/800/600?random=3', alt: 'Photo 3', caption: 'City Lights' },
  { src: 'https://picsum.photos/800/600?random=4', alt: 'Photo 4' },
];

// Basic 3-column grid with lightbox
<Gallery images={images} />

// Custom columns, overlay effect
<Gallery
  images={images}
  columns={4}
  gap="0.5rem"
  lightbox
  hoverEffect="overlay"
  borderRadius="4px"
  aspectRatio="4 / 3"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `GalleryImage[]` | required | Array of image objects |
| `columns` | `number` | `3` | Grid columns |
| `gap` | `string` | `'1rem'` | Gap between images |
| `lightbox` | `boolean` | `true` | Enable lightbox on click |
| `hoverEffect` | `'none'\|'zoom'\|'overlay'` | `'zoom'` | Hover animation |
| `borderRadius` | `string` | `'8px'` | Image border radius |
| `aspectRatio` | `string` | `'1 / 1'` | CSS aspect-ratio |

---

### Counter

An animated number counter that triggers when scrolled into view.

```tsx
import { Counter } from 'elementor-react-ui';

// Basic
<Counter end={1000} />

// With prefix, suffix, separator
<Counter
  start={0}
  end={9999}
  duration={2500}
  prefix="$"
  suffix="+"
  separator=","
  label="Happy Customers"
  fontSize="4rem"
  color="#4A90E2"
  fontWeight={800}
/>

// Row of stats
<div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
  <Counter end={500} suffix="+" label="Projects" color="#4A90E2" />
  <Counter end={200} suffix="+" label="Clients" color="#7B68EE" />
  <Counter end={10} suffix=" yrs" label="Experience" color="#e91e63" />
</div>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `end` | `number` | required | Final count value |
| `start` | `number` | `0` | Initial count value |
| `duration` | `number` | `2000` | Animation duration (ms) |
| `prefix` | `string` | `''` | Text before the number |
| `suffix` | `string` | `''` | Text after the number |
| `separator` | `string` | `','` | Thousands separator |
| `decimals` | `number` | `0` | Decimal places |
| `fontSize` | `string` | `'3rem'` | Counter font size |
| `color` | `string` | `'#4A90E2'` | Counter color |
| `label` | `string` | - | Label below counter |
| `animateOnView` | `boolean` | `true` | Trigger on scroll |

---

### ProgressBar

An animated progress bar with label and flexible value display.

```tsx
import { ProgressBar } from 'elementor-react-ui';

// Basic
<ProgressBar value={75} />

// Labeled with value
<ProgressBar
  label="JavaScript"
  value={90}
  color="#4A90E2"
  height="14px"
  showValue
  valueFormat="percent"
  animate
/>

// Striped
<ProgressBar label="Upload Progress" value={60} color="#22c55e" striped height="16px" />

// Custom track
<ProgressBar
  label="Storage"
  value={4.5}
  max={10}
  color="#e91e63"
  trackColor="#fce7f3"
  valueFormat="value"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | required | Current value |
| `max` | `number` | `100` | Maximum value |
| `label` | `string` | - | Bar label |
| `color` | `string` | `'#4A90E2'` | Fill color |
| `trackColor` | `string` | `'#e5e7eb'` | Track background color |
| `height` | `string` | `'12px'` | Bar height |
| `showValue` | `boolean` | `true` | Show value text |
| `valueFormat` | `'percent'\|'value'\|'both'` | `'percent'` | Value display format |
| `animate` | `boolean` | `true` | Animate fill |
| `animateOnView` | `boolean` | `true` | Trigger animation on scroll |
| `striped` | `boolean` | `false` | Striped fill pattern |

---

### IconBox

An icon with title and description, supporting top/left/right icon positions.

```tsx
import { IconBox } from 'elementor-react-ui';

// Top layout
<IconBox
  icon="🚀"
  title="Fast Performance"
  description="Optimized for speed with lazy loading and code splitting."
/>

// Left layout with icon background
<IconBox
  icon="💡"
  title="Smart Design"
  description="Intuitive components that just work."
  layout="left"
  iconColor="#7B68EE"
  iconBackground="#ede9fe"
  iconBorderRadius="12px"
  iconPadding="0.75rem"
/>

// Centered
<IconBox
  icon="🎨"
  title="Beautiful UI"
  description="Pixel-perfect with smooth animations."
  layout="top"
  align="center"
  iconColor="#e91e63"
  iconSize="3rem"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | required | Icon element |
| `title` | `string` | - | Title text |
| `description` | `string` | - | Description text |
| `layout` | `'top'\|'left'\|'right'` | `'top'` | Icon position |
| `iconColor` | `string` | `'#4A90E2'` | Icon color |
| `iconSize` | `string` | `'2.5rem'` | Icon font size |
| `iconBackground` | `string` | - | Icon background color |
| `align` | `'left'\|'center'\|'right'` | `'left'` | Text alignment |

---

### ImageBox

An image combined with title and description.

```tsx
import { ImageBox } from 'elementor-react-ui';

<ImageBox
  image="https://picsum.photos/400/300"
  imageAlt="Feature"
  title="Our Mission"
  description="We strive to build the best React components."
/>

<ImageBox
  image="https://picsum.photos/200/200"
  title="Meet the Team"
  description="Passionate developers and designers."
  layout="left"
  imageSize="150px"
  link="/team"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `string` | required | Image URL |
| `title` | `string` | - | Title text |
| `description` | `string` | - | Description text |
| `layout` | `'top'\|'left'\|'right'\|'bottom'` | `'top'` | Image position |
| `imageSize` | `string` | `'100%'` | Image width (horizontal layouts) |
| `link` | `string` | - | Wraps in anchor tag |

---

### Testimonial

Customer testimonial card with avatar, star rating, and multiple layouts.

```tsx
import { Testimonial } from 'elementor-react-ui';

// Card layout
<Testimonial
  quote="This component library saved me weeks of development time!"
  name="Jane Smith"
  position="Lead Developer"
  company="TechCorp"
  starRating={5}
/>

// With avatar
<Testimonial
  quote="Elegant, fast, and easy to customize."
  name="John Doe"
  position="CEO"
  avatar="https://i.pravatar.cc/150?img=1"
  starRating={5}
/>

// Quote layout
<Testimonial
  quote="Outstanding quality and developer experience."
  name="Alice Johnson"
  layout="quote"
  starRating={4}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `quote` | `string` | required | Testimonial text |
| `name` | `string` | required | Author name |
| `position` | `string` | - | Author job title |
| `company` | `string` | - | Author company |
| `avatar` | `string` | - | Avatar image URL |
| `layout` | `'card'\|'quote'\|'bubble'\|'minimal'` | `'card'` | Display layout |
| `starRating` | `number` | - | Star rating (0-5) |
| `backgroundColor` | `string` | `'#fff'` | Card background |

---

### Alert

Contextual alert messages with optional dismiss functionality.

```tsx
import { Alert } from 'elementor-react-ui';

<Alert message="Operation completed successfully!" type="success" />

<Alert
  title="Warning"
  message="Your session will expire in 5 minutes."
  type="warning"
  dismissible
/>

<Alert
  title="Error"
  message="Failed to connect to the server."
  type="error"
  dismissible
  onDismiss={() => console.log('dismissed')}
/>

<Alert
  title="Info"
  message="A new version is available."
  type="info"
  icon={false}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | required | Alert body text |
| `title` | `string` | - | Optional bold title |
| `type` | `'success'\|'warning'\|'error'\|'info'` | `'info'` | Alert type |
| `dismissible` | `boolean` | `false` | Show close button |
| `icon` | `ReactNode\|boolean` | `true` | Custom icon or `false` to hide |
| `onDismiss` | `() => void` | - | Dismiss callback |

---

### Divider

A horizontal rule with optional text and style variations.

```tsx
import { Divider } from 'elementor-react-ui';

<Divider />
<Divider dividerStyle="dashed" color="#4A90E2" thickness="2px" />
<Divider text="OR" textColor="#888" />
<Divider text="Section 2" textAlign="left" />
<Divider dividerStyle="dotted" margin="2rem 0" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dividerStyle` | `'solid'\|'dashed'\|'dotted'\|'double'` | `'solid'` | Line style |
| `color` | `string` | `'#e5e7eb'` | Line color |
| `thickness` | `string` | `'1px'` | Line thickness |
| `text` | `string` | - | Text in divider |
| `textAlign` | `'left'\|'center'\|'right'` | `'center'` | Text alignment |
| `margin` | `string` | `'1.5rem 0'` | Vertical margin |

---

### Spacer

A blank vertical space with responsive height support.

```tsx
import { Spacer } from 'elementor-react-ui';

<Spacer height="3rem" />

<Spacer
  height="4rem"
  mobileHeight="1.5rem"
  tabletHeight="2.5rem"
  desktopHeight="4rem"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `height` | `string` | `'2rem'` | Default height |
| `mobileHeight` | `string` | - | Height on mobile (<640px) |
| `tabletHeight` | `string` | - | Height on tablet (<1024px) |
| `desktopHeight` | `string` | - | Height on desktop |

---

### VideoWidget

Embeds YouTube, Vimeo, or self-hosted videos responsively.

```tsx
import { VideoWidget } from 'elementor-react-ui';

// YouTube
<VideoWidget url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />

// Vimeo with autoplay
<VideoWidget
  url="https://vimeo.com/123456789"
  autoplay
  muted
  loop
  aspectRatio="16/9"
/>

// Self-hosted
<VideoWidget
  url="/videos/demo.mp4"
  controls
  poster="/images/poster.jpg"
  borderRadius="12px"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | required | Video URL |
| `autoplay` | `boolean` | `false` | Autoplay video |
| `loop` | `boolean` | `false` | Loop video |
| `muted` | `boolean` | `false` | Mute video |
| `poster` | `string` | - | Poster image (self-hosted) |
| `controls` | `boolean` | `true` | Show controls |
| `aspectRatio` | `'16/9'\|'4/3'\|'1/1'\|'9/16'\|'21/9'` | `'16/9'` | Aspect ratio |

---

### SocialIcons

Social media icon links with hover animations.

```tsx
import { SocialIcons } from 'elementor-react-ui';

<SocialIcons
  platforms={[
    { platform: 'github', url: 'https://github.com/yourname' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/yourname' },
    { platform: 'twitter', url: 'https://twitter.com/yourname' },
    { platform: 'instagram', url: 'https://instagram.com/yourname' },
  ]}
/>

// Square shape
<SocialIcons
  platforms={[
    { platform: 'facebook', url: '#' },
    { platform: 'youtube', url: '#' },
  ]}
  shape="square"
  size="48px"
  gap="1rem"
/>
```

Supported platforms: `facebook`, `twitter`, `instagram`, `linkedin`, `youtube`, `github`, `pinterest`, `tiktok`, `snapchat`, `reddit`, `whatsapp`, `telegram`, `discord`, `dribbble`, `behance`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `platforms` | `SocialIconItem[]` | required | Social platform list |
| `size` | `string` | `'40px'` | Icon container size |
| `shape` | `'circle'\|'square'\|'rounded'\|'none'` | `'circle'` | Container shape |
| `iconSize` | `string` | `'1rem'` | Icon size |
| `gap` | `string` | `'0.75rem'` | Gap between icons |
| `hoverEffect` | `boolean` | `true` | Enable hover animation |

---

### IconList

A list of items each with an icon.

```tsx
import { IconList } from 'elementor-react-ui';

<IconList
  items={[
    { icon: '✓', text: 'Free forever plan' },
    { icon: '✓', text: 'No credit card required', link: '/pricing' },
    { icon: '✓', text: 'Cancel anytime' },
  ]}
  iconColor="#22c55e"
/>

// Horizontal layout
<IconList
  items={[
    { icon: '📍', text: 'New York' },
    { icon: '📧', text: 'hello@example.com' },
  ]}
  layout="horizontal"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `IconListItem[]` | required | List items |
| `layout` | `'vertical'\|'horizontal'` | `'vertical'` | List direction |
| `iconColor` | `string` | `'#4A90E2'` | Default icon color |
| `textColor` | `string` | `'#444'` | Text color |
| `divider` | `boolean` | `false` | Show dividers |

---

### Card

A flexible content card with image, title, description, and hover effects.

```tsx
import { Card } from 'elementor-react-ui';

// Basic
<Card title="Card Title" description="A short description." />

// With image and footer
<Card
  image="https://picsum.photos/600/300"
  title="Blog Post Title"
  description="Lorem ipsum dolor sit amet..."
  footer={<a href="#">Read More</a>}
  hoverEffect
  shadow="lg"
/>

// Outlined, linked
<Card
  title="Product"
  description="Description."
  variant="outlined"
  borderRadius="16px"
  link="/products/1"
  hoverEffect
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title |
| `description` | `string` | - | Card description |
| `image` | `string` | - | Header image URL |
| `imageHeight` | `string` | `'200px'` | Image height |
| `footer` | `ReactNode` | - | Footer content |
| `variant` | `'default'\|'outlined'\|'elevated'\|'flat'` | `'default'` | Card style |
| `shadow` | `'none'\|'sm'\|'md'\|'lg'\|'xl'` | `'md'` | Box shadow |
| `hoverEffect` | `boolean` | `false` | Lift on hover |
| `link` | `string` | - | Makes card clickable |

---

### Grid

A responsive CSS Grid layout wrapper.

```tsx
import { Grid, Card } from 'elementor-react-ui';

// Fixed 3 columns
<Grid columns={3} gap="1.5rem">
  <Card title="Item 1" description="Description" />
  <Card title="Item 2" description="Description" />
  <Card title="Item 3" description="Description" />
</Grid>

// Responsive columns
<Grid columns={{ mobile: 1, tablet: 2, desktop: 4 }} gap="1rem">
  {items.map((item) => <Card key={item.id} {...item} />)}
</Grid>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | Grid items |
| `columns` | `number \| ResponsiveColumns` | `3` | Column count |
| `gap` | `string` | `'1.5rem'` | Grid gap |
| `align` | `'start'\|'center'\|'end'\|'stretch'` | `'stretch'` | Align items |
| `justify` | `'start'\|'center'\|'end'\|'between'\|'around'\|'evenly'` | `'start'` | Justify content |

---

### Hero

A full-width hero/banner section with background, overlay, and CTA buttons.

```tsx
import { Hero } from 'elementor-react-ui';

// Dark hero
<Hero
  title="Build Faster, Launch Sooner"
  description="The component library that makes React development a joy."
  ctaButtons={[
    { text: 'Get Started Free', href: '/signup', variant: 'primary' },
    { text: 'View Demo', href: '/demo', variant: 'outline' },
  ]}
/>

// With background image
<Hero
  title="Explore the World"
  subtitle="Travel & Adventure"
  description="Discover breathtaking destinations."
  backgroundImage="https://picsum.photos/1920/1080"
  overlayColor="#000"
  overlayOpacity={0.5}
  align="center"
  minHeight="100vh"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Main heading |
| `subtitle` | `string` | - | Small text above title |
| `description` | `string` | - | Body paragraph |
| `backgroundImage` | `string` | - | Background image URL |
| `backgroundColor` | `string` | `'#1a1a2e'` | Background color |
| `overlayColor` | `string` | `'#000000'` | Overlay color |
| `overlayOpacity` | `number` | `0.4` | Overlay opacity (0-1) |
| `ctaButtons` | `HeroCTA[]` | `[]` | Call-to-action buttons |
| `align` | `'left'\|'center'\|'right'` | `'center'` | Content alignment |
| `minHeight` | `string` | `'80vh'` | Minimum height |

---

### Navbar

A responsive navigation bar with hamburger menu on mobile.

```tsx
import { Navbar } from 'elementor-react-ui';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

// Light
<Navbar logoText="MyBrand" links={links} />

// Dark + sticky
<Navbar logoText="MyBrand" links={links} colorScheme="dark" sticky />

// Transparent over hero
<Navbar logoText="MyBrand" links={links} colorScheme="transparent" transparent sticky />

// With right CTA
<Navbar
  logoText="MyApp"
  links={links}
  rightContent={
    <a href="/login" style={{ padding: '0.5rem 1rem', background: '#4A90E2', color: '#fff', borderRadius: '6px', textDecoration: 'none' }}>
      Login
    </a>
  }
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `ReactNode` | - | Custom logo element |
| `logoText` | `string` | `'Brand'` | Logo text |
| `links` | `NavLink[]` | `[]` | Navigation links |
| `sticky` | `boolean` | `false` | Sticky positioning |
| `transparent` | `boolean` | `false` | Transparent on top |
| `colorScheme` | `'light'\|'dark'\|'transparent'\|'primary'` | `'light'` | Color theme |
| `rightContent` | `ReactNode` | - | Right-side content |
| `height` | `string` | `'64px'` | Navbar height |

---

### Footer

A multi-column footer with links, social icons, and copyright.

```tsx
import { Footer } from 'elementor-react-ui';

<Footer
  logoText="MyBrand"
  description="Building the future of web development."
  columns={[
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
      ],
    },
  ]}
  socialLinks={[
    { platform: 'GitHub', url: 'https://github.com', icon: '⌥' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
  ]}
  copyright="2026 MyBrand. All rights reserved."
  colorScheme="dark"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `FooterColumn[]` | `[]` | Link columns |
| `copyright` | `string` | Auto | Copyright text |
| `socialLinks` | `FooterSocialLink[]` | `[]` | Social links |
| `logoText` | `string` | `'Brand'` | Logo text |
| `description` | `string` | - | Brand description |
| `colorScheme` | `'light'\|'dark'` | `'dark'` | Color theme |

---

### Modal

A dialog/modal overlay with animations, keyboard close (Esc), and backdrop click.

```tsx
import React, { useState } from 'react';
import { Modal, Button } from 'elementor-react-ui';

function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button text="Open Modal" onClick={() => setOpen(true)} />
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Confirm Action"
        size="md"
        animation="zoom"
        footer={
          <>
            <Button text="Cancel" variant="ghost" onClick={() => setOpen(false)} />
            <Button text="Confirm" variant="primary" onClick={() => setOpen(false)} />
          </>
        }
      >
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  );
}
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | required | Controls visibility |
| `onClose` | `() => void` | required | Close handler |
| `title` | `string` | - | Modal title |
| `children` | `ReactNode` | required | Modal body |
| `size` | `'sm'\|'md'\|'lg'\|'xl'\|'full'` | `'md'` | Modal width |
| `animation` | `'fade'\|'slide'\|'zoom'\|'none'` | `'zoom'` | Entry animation |
| `closeOnBackdrop` | `boolean` | `true` | Close on overlay click |
| `showCloseButton` | `boolean` | `true` | Show X button |
| `footer` | `ReactNode` | - | Footer actions |

---

### Toast

A lightweight toast notification with auto-dismiss.

```tsx
import React, { useState } from 'react';
import { Toast, ToastContainer, useToast } from 'elementor-react-ui';

// Standalone
function Example() {
  const [show, setShow] = useState(true);
  return (
    <Toast
      message="File uploaded successfully!"
      type="success"
      duration={4000}
      isVisible={show}
      onDismiss={() => setShow(false)}
    />
  );
}

// With useToast hook
function App() {
  const { toasts, addToast, removeToast } = useToast();
  return (
    <div>
      <button onClick={() => addToast('Hello world!', 'success')}>Show Toast</button>
      <button onClick={() => addToast('Error!', 'error', 5000)}>Error Toast</button>
      <ToastContainer position="top-right">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            message={t.message}
            type={t.type}
            duration={t.duration}
            onDismiss={() => removeToast(t.id)}
          />
        ))}
      </ToastContainer>
    </div>
  );
}
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | required | Toast message |
| `type` | `'success'\|'warning'\|'error'\|'info'` | `'info'` | Toast type |
| `duration` | `number` | `3000` | Auto-dismiss delay ms (0 = no auto) |
| `position` | `ToastPosition` | `'top-right'` | Screen position |
| `title` | `string` | - | Optional bold title |
| `onDismiss` | `() => void` | - | Dismiss callback |
| `isVisible` | `boolean` | `true` | Visibility control |

Toast positions: `top-right`, `top-left`, `top-center`, `bottom-right`, `bottom-left`, `bottom-center`

---

## Hooks

### useCounter

Animates a number from `start` to `end` with easing.

```ts
import { useCounter } from 'elementor-react-ui';

const { count, startCounter, resetCounter, isRunning } = useCounter({
  start: 0,
  end: 1000,
  duration: 2000,
  startOnMount: true,
});
```

### useIntersectionObserver

Detects when an element enters the viewport (great for scroll animations).

```ts
import { useIntersectionObserver } from 'elementor-react-ui';

const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({
  threshold: 0.2,
  triggerOnce: true,
});

return <div ref={ref}>{isInView ? 'Visible!' : 'Hidden'}</div>;
```

### useToast

Manages a queue of toast notifications.

```ts
import { useToast } from 'elementor-react-ui';

const { toasts, addToast, removeToast, clearAll } = useToast();

// addToast(message, type, duration, position)
addToast('Success!', 'success', 3000, 'top-right');
addToast('Error occurred', 'error', 5000);
clearAll();
```

---

## Utilities

```ts
import {
  mergeStyles,
  formatNumber,
  hexToRgba,
  getYoutubeId,
  getVimeoId,
  generateId,
  debounce,
  easeInOutCubic,
  colorPalette,
} from 'elementor-react-ui';

// Format number with separators
formatNumber(1234567);           // '1,234,567'
formatNumber(1234567, '.');      // '1.234.567'

// Color utilities
hexToRgba('#4A90E2', 0.5);       // 'rgba(74,144,226,0.5)'

// Video ID extraction
getYoutubeId('https://youtube.com/watch?v=abc123');  // 'abc123'
getVimeoId('https://vimeo.com/123456789');            // '123456789'

// Unique ID generation
generateId('btn');               // 'btn-x7k2p9m'

// Debounce
const debouncedSearch = debounce((q: string) => search(q), 300);

// Color palette
colorPalette.primary   // '#4A90E2'
colorPalette.secondary // '#7B68EE'
colorPalette.success   // '#52C41A'
```

---

## TypeScript

All components are fully typed. Import types alongside components:

```ts
import type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  CardProps,
  CardVariant,
  HeroProps,
  HeroCTA,
  AccordionItem,
  AccordionProps,
  TabItem,
  TabsStyle,
  TabsOrientation,
  GalleryImage,
  GalleryHoverEffect,
  CarouselItem,
  CounterProps,
  ProgressBarProps,
  IconBoxLayout,
  TestimonialLayout,
  AlertType,
  DividerStyle,
  AspectRatio,
  SocialPlatform,
  SocialIconItem,
  IconListItem,
  ModalSize,
  ModalAnimation,
  ToastType,
  ToastPosition,
  NavbarColorScheme,
  NavLink,
  FooterColumn,
  ResponsiveColumns,
} from 'elementor-react-ui';
```

---

## Project Structure

```
src/
  components/
    Heading/        index.tsx, types.ts
    Button/         index.tsx, types.ts
    ImageWidget/    index.tsx, types.ts
    Accordion/      index.tsx, types.ts
    Tabs/           index.tsx, types.ts
    Carousel/       index.tsx, types.ts
    Gallery/        index.tsx, types.ts
    Counter/        index.tsx, types.ts
    ProgressBar/    index.tsx, types.ts
    IconBox/        index.tsx, types.ts
    ImageBox/       index.tsx, types.ts
    Testimonial/    index.tsx, types.ts
    Alert/          index.tsx, types.ts
    Divider/        index.tsx, types.ts
    Spacer/         index.tsx, types.ts
    VideoWidget/    index.tsx, types.ts
    SocialIcons/    index.tsx, types.ts
    IconList/       index.tsx, types.ts
    Card/           index.tsx, types.ts
    Grid/           index.tsx, types.ts
    Hero/           index.tsx, types.ts
    Navbar/         index.tsx, types.ts
    Footer/         index.tsx, types.ts
    Modal/          index.tsx, types.ts
    Toast/          index.tsx, types.ts
  hooks/
    useCounter.ts
    useIntersectionObserver.ts
    useToast.ts
  utils/
    styles.ts
    helpers.ts
  index.ts
```

---

## Contributing

Contributions are welcome! Please open an issue or submit a PR on [GitHub](https://github.com/ChintuSanty/reactPlugin).

1. Fork the repository
2. Create your branch: `git checkout -b feature/new-component`
3. Commit: `git commit -m 'Add NewComponent'`
4. Push: `git push origin feature/new-component`
5. Open a Pull Request

---

## License

MIT (c) [ChintuSanty](https://github.com/ChintuSanty)

---

## Links

- **npm**: https://www.npmjs.com/package/elementor-react-ui
- **GitHub**: https://github.com/ChintuSanty/reactPlugin
- **Issues**: https://github.com/ChintuSanty/reactPlugin/issues
