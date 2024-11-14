import { createSignal } from 'solid-js';

type SupportDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (supportData: { name: string; email: string; message: string }) => void;
  backgroundColor?: string;
  textColor?: string;
};

const SupportDialog = (props: SupportDialogProps) => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [message, setMessage] = createSignal('');

  const isFormValid = () => name() !== '' && email() !== '' && message() !== '';

  const handleSubmit = () => {
    if (isFormValid()) {
      props.onSubmit({ name: name(), email: email(), message: message() });
      setName('');
      setEmail('');
      setMessage('');
      handleClose(); // Closing the modal after successful submission
    }
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <>
      {props.isOpen && (
        <div
          class="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1002] outline-none focus:outline-none justify-center items-center"
          onClick={handleClose} // Close the dialog on background click
        >
          <div
            class="relative w-full my-6 max-w-lg mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
          >
            <div
              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              style={{
                'background-color': props.backgroundColor ?? '#ffffff',
                color: props.textColor ?? '#303235',
              }}
            >
              <div class="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <span class="font-semibold">Brug for en medarbejder?</span>
                <button
                  class="p-1 ml-auto bg-transparent border-0 text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                  type="button"
                  onClick={handleClose}
                >
                  <span class="bg-transparent block outline-none focus:outline-none">x</span>
                </button>
              </div>
              <div class="p-6 flex-auto space-y-5">
                <div>
                  <label for="name" class="block text-sm font-medium mb-1">
                    Navn:
                  </label>
                  <input
                    required={true}
                    id="name"
                    type="text"
                    value={name()}
                    onInput={(e) => setName(e.currentTarget.value)}
                    class="block w-full p-2 rounded-lg border"
                    placeholder="Fulde navn"
                    style={{ 'background-color': '#ffffff' }}
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium mb-1">
                    Kontaktoplysninger:
                  </label>
                  <input
                    required={true}
                    id="email"
                    type="email"
                    value={email()}
                    onInput={(e) => setEmail(e.currentTarget.value)}
                    class="block w-full p-2 rounded-lg border"
                    placeholder="Indtast email eller tlf. nr."
                    style={{ 'background-color': '#ffffff' }}
                  />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium mb-1">
                    Besked:
                  </label>
                  <textarea
                    required={true}
                    id="message"
                    value={message()}
                    onInput={(e) => setMessage(e.currentTarget.value)}
                    rows="4"
                    class="block w-full p-2 rounded-lg border"
                    placeholder="Hvordan kan vi hjælpe dig?"
                    style={{ 'background-color': '#ffffff', resize: 'none' }}
                    maxLength={400}
                  />
                </div>
              </div>
              <div class="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  class="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.isOpen && (
        <div
          class="flex opacity-25 fixed inset-0 z-[1001] bg-black"
          onClick={handleClose} // Ensures clicking background closes the dialog
        />
      )}
    </>
  );
};

export default SupportDialog;
