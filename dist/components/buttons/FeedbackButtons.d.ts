import { JSX } from 'solid-js';
type RatingButtonProps = {
    feedbackColor?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    disableIcon?: boolean;
    rating?: string;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const SupportButton: (props: RatingButtonProps) => JSX.Element;
export declare const ThumbsUpButton: (props: RatingButtonProps) => JSX.Element;
export declare const ThumbsDownButton: (props: RatingButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=FeedbackButtons.d.ts.map