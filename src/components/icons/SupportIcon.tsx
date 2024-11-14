import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';

export const SupportIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-refresh w-5 h-5"
    width="26"
    height="26"
    viewBox="0 0 32 32" // ViewBox from the new SVG
    fill="none"
    stroke={props.color ?? defaultButtonColor} // Maintain color handling
    stroke-width="2" // Set to 2 as specified in your new SVG styles
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10" // Stroke miter limit as specified
  >
    <path class="st0" d="M5,17.4v-3.5C5,7.9,9.9,3,16,3s11,4.9,11,10.9l0,3.5" />
    <path class="st0" d="M27,15v3.4C27,24.3,22.1,29,16,29l0-2l3,0" />
    <path class="st0" d="M9,22v-8c-2.2,0-4,1.8-4,4S6.8,22,9,22z" />
    <path class="st0" d="M23,14v8c2.2,0,4-1.8,4-4S25.2,14,23,14z" />
  </svg>
);
