// NOTE: Import santycss CSS in your app entry point:
// import 'santycss/css';
// or via CDN: <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/santycss/dist/santy.css">

// Components
export { default as Heading } from './components/Heading';
export { default as Button } from './components/Button';
export { default as ImageWidget } from './components/ImageWidget';
export { default as Accordion } from './components/Accordion';
export { default as Tabs } from './components/Tabs';
export { default as Carousel } from './components/Carousel';
export { default as Gallery } from './components/Gallery';
export { default as Counter } from './components/Counter';
export { default as ProgressBar } from './components/ProgressBar';
export { default as IconBox } from './components/IconBox';
export { default as ImageBox } from './components/ImageBox';
export { default as Testimonial } from './components/Testimonial';
export { default as Alert } from './components/Alert';
export { default as Divider } from './components/Divider';
export { default as Spacer } from './components/Spacer';
export { default as VideoWidget } from './components/VideoWidget';
export { default as SocialIcons } from './components/SocialIcons';
export { default as IconList } from './components/IconList';
export { default as Card } from './components/Card';
export { default as Grid } from './components/Grid';
export { default as Hero } from './components/Hero';
export { default as Navbar } from './components/Navbar';
export { default as Footer } from './components/Footer';
export { default as Modal } from './components/Modal';
export { default as Toast, ToastContainer } from './components/Toast';

// Hooks
export { useCounter } from './hooks/useCounter';
export { useIntersectionObserver } from './hooks/useIntersectionObserver';
export { useToast } from './hooks/useToast';

// Utils
export { mergeStyles, sizeMap, spacingMap, shadowMap, colorPalette } from './utils/styles';
export {
  clamp,
  formatNumber,
  isValidUrl,
  getYoutubeId,
  getVimeoId,
  generateId,
  debounce,
  hexToRgba,
  easeInOutCubic,
} from './utils/helpers';

// Types
export type { HeadingProps } from './components/Heading/types';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button/types';
export type { ImageWidgetProps, HoverEffect } from './components/ImageWidget/types';
export type { AccordionProps, AccordionItem } from './components/Accordion/types';
export type { TabsProps, TabItem, TabsStyle, TabsOrientation } from './components/Tabs/types';
export type { CarouselProps, CarouselItem } from './components/Carousel/types';
export type { GalleryProps, GalleryImage, GalleryHoverEffect } from './components/Gallery/types';
export type { CounterProps } from './components/Counter/types';
export type { ProgressBarProps } from './components/ProgressBar/types';
export type { IconBoxProps, IconBoxLayout } from './components/IconBox/types';
export type { ImageBoxProps, ImageBoxLayout } from './components/ImageBox/types';
export type { TestimonialProps, TestimonialLayout } from './components/Testimonial/types';
export type { AlertProps, AlertType } from './components/Alert/types';
export type { DividerProps, DividerStyle } from './components/Divider/types';
export type { SpacerProps } from './components/Spacer/types';
export type { VideoWidgetProps, AspectRatio } from './components/VideoWidget/types';
export type { SocialIconsProps, SocialIconItem, SocialPlatform } from './components/SocialIcons/types';
export type { IconListProps, IconListItem } from './components/IconList/types';
export type { CardProps, CardVariant } from './components/Card/types';
export type { GridProps, ResponsiveColumns } from './components/Grid/types';
export type { HeroProps, HeroCTA } from './components/Hero/types';
export type { NavbarProps, NavLink, NavbarColorScheme } from './components/Navbar/types';
export type { FooterProps, FooterColumn, FooterLink, FooterSocialLink } from './components/Footer/types';
export type { ModalProps, ModalSize, ModalAnimation } from './components/Modal/types';
export type { ToastProps, ToastContainerProps, ToastType, ToastPosition } from './components/Toast/types';
