import { createSignal } from 'solid-js';
import { JSX, Show } from 'solid-js';
import { Spinner } from './SendButton';
import { SupportIcon, ThumbsDownIcon, ThumbsUpIcon } from '../icons';
import SupportDialog from '../SupportDialog';

type RatingButtonProps = {
  feedbackColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableIcon?: boolean;
  rating?: string;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

type SupportData = {
  name: string;
  email: string;
  message: string;
};

const defaultFeedbackColor = '#3B81F6';

export const SupportButton = (props: RatingButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = createSignal(false);

  const handleClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleSupportSubmit = (supportData: SupportData) => {
    console.log('User Support Info:', supportData);
    // Here you could handle sending this data to your server or processing it further
    handleDialogClose();
  };

  return (
    <>
      <button
        type="button"
        disabled={props.isDisabled || props.isLoading}
        class={
          'p-2 justify-center font-semibold text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ' +
          props.class
        }
        style={{ background: 'transparent', border: 'none' }}
        title="Request Support"
        onClick={handleClick}
      >
        <Show when={!props.isLoading} fallback={<Spinner class="text-white" />}>
          <SupportIcon
            color={props.feedbackColor ?? defaultFeedbackColor}
            style={{ width: '26px', height: '26px' }}
            class={'send-icon flex ' + (props.disableIcon ? 'hidden' : '')}
          />
        </Show>
      </button>
      <SupportDialog isOpen={isDialogOpen()} onClose={handleDialogClose} onSubmit={handleSupportSubmit} backgroundColor="#f7f8fa" textColor="#333" />
    </>

  );
};

export const ThumbsUpButton = (props: RatingButtonProps) => {
  return (
    <button
      type="submit"
      disabled={props.isDisabled || props.isLoading}
      {...props}
      class={
        'p-2 justify-center font-semibold text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ' +
        props.class
      }
      style={{ background: 'transparent', border: 'none' }}
      title="Thumbs Up"
    >
      <Show when={!props.isLoading} fallback={<Spinner class="text-white" />}>
        <ThumbsUpIcon color={props.feedbackColor ?? defaultFeedbackColor} class={'send-icon flex ' + (props.disableIcon ? 'hidden' : '')} />
      </Show>
    </button>
  );
};

export const ThumbsDownButton = (props: RatingButtonProps) => {
  return (
    <button
      type="submit"
      disabled={props.isDisabled || props.isLoading}
      {...props}
      class={
        'p-2 justify-center font-semibold text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 chatbot-button ' +
        props.class
      }
      style={{ background: 'transparent', border: 'none' }}
      title="Thumbs Down"
    >
      <Show when={!props.isLoading} fallback={<Spinner class="text-white" />}>
        <ThumbsDownIcon color={props.feedbackColor ?? defaultFeedbackColor} class={'send-icon flex ' + (props.disableIcon ? 'hidden' : '')} />
      </Show>
    </button>
  );
};
