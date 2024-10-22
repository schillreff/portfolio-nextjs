import { SVGProps } from "react";

interface IIconProps {
  className?: string;
  rest?: SVGProps<SVGSVGElement>;
}

export const GithubIcon = ({ className = "", ...rest }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    className={`${className}`}
    {...rest}
  >
    <path
      d="M16 3C8.82 3 3 8.82 3 16c0 6.137 4.258 11.281 9.977 12.645-.297-.07-.59-.153-.875-.243v-2.976s-.489.16-1.141.16c-1.816 0-2.574-1.621-2.762-2.438a2.534 2.534 0 0 0-.734-1.253c-.383-.34-.563-.344-.567-.461-.003-.243.332-.235.489-.235.812 0 1.43.867 1.715 1.313.707 1.101 1.468 1.289 1.859 1.289.488 0 .91-.074 1.2-.215.136-.941.554-1.785 1.237-2.387C10.352 20.59 8.2 18.844 8.2 16c0-1.465.59-2.809 1.567-3.895-.098-.285-.266-.859-.266-1.793 0-.617.043-1.374.324-2.113 0 0 1.856.016 3.602 1.668a9.233 9.233 0 0 1 5.148 0C20.32 8.215 22.176 8.2 22.176 8.2c.281.739.324 1.496.324 2.114 0 1.007-.133 1.593-.215 1.847.95 1.078 1.516 2.402 1.516 3.84 0 2.844-2.153 4.59-5.2 5.2.813.714 1.297 1.757 1.297 2.925v4.277c-.285.09-.578.172-.875.243C24.743 27.28 29 22.137 29 16c0-7.18-5.82-13-13-13Zm.906 25.965Zm1.989-.293ZM16 29Zm-1.105-.05Zm0 0"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);

export const XIcon = ({ className = "", ...rest }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    className={`${className}`}
    {...rest}
  >
    <path
      d="M7.04 2.559a4.483 4.483 0 0 0-4.481 4.48v17.922a4.483 4.483 0 0 0 4.48 4.48h17.922a4.483 4.483 0 0 0 4.48-4.48V7.039a4.483 4.483 0 0 0-4.48-4.48ZM8.374 8.32h5.078l3.61 5.125L21.44 8.32h1.598l-5.254 6.153 6.48 9.207h-5.078L15 17.734 9.922 23.68H8.32l5.957-6.973Zm2.45 1.282 9.03 12.796h1.961l-9.03-12.796Zm0 0"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);

export const LinkedinIcon = ({ className = "", ...rest }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    className={`${className}`}
    {...rest}
  >
    <path
      d="M28 24.668A3.333 3.333 0 0 1 24.668 28H7.332A3.333 3.333 0 0 1 4 24.668V7.332A3.333 3.333 0 0 1 7.332 4h17.336A3.333 3.333 0 0 1 28 7.332Zm0 0"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#0288d1",
        fillOpacity: 1,
      }}
    />
    <path
      d="M8 12.668h3.332V24H8Zm1.656-1.336h-.02C8.646 11.332 8 10.594 8 9.664 8 8.72 8.664 8 9.676 8c1.015 0 1.64.719 1.656 1.664 0 .926-.64 1.668-1.676 1.668ZM24 24h-3.332v-6.066c0-1.465-.816-2.465-2.129-2.465-1 0-1.543.676-1.805 1.328-.097.23-.066.879-.066 1.203v6h-3.336V12.668h3.336v1.742c.48-.742 1.23-1.742 3.156-1.742 2.387 0 4.176 1.5 4.176 4.848Zm0 0"
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1,
      }}
    />
  </svg>
);

export const CircularText = ({ className = "", ...rest }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={500}
    height={500}
    viewBox="0 0 500 500"
    className={`${className}`}
    {...rest}
  >
    <rect width="100%" height="100%" fill="transparent" />
    <g>
      <path
        d="M409.997 242.871c4.496.024 8.494.014 12.49.085 1.953.035 3.836.461 3.765 2.963-.201 7.126 1.087 14.343-1.005 21.358-2.618 8.78-9.585 13.52-18.894 13.026-8.26-.438-14.968-6.327-16.48-14.858-1.077-6.084-.927-12.27-.735-18.436.09-2.886 1.452-4.177 4.371-4.134 5.329.078 10.66.006 16.488-.004m3.629 26.486c5.047-3.596 5.173-8.91 4.985-14.324-.077-2.231-1.575-2.657-3.421-2.655-4.818.005-9.635-.023-14.453-.012-1.565.003-3.23.22-3.332 2.18-.25 4.774-1.158 9.853 2.955 13.57 3.709 3.353 8.096 3.379 13.266 1.241z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.678)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M59.667 216.98c5.38-10.284 13.408-13.815 23.191-10.516 8.953 3.019 13.343 11.308 11.512 22.024-.78 4.568-1.982 9.066-2.724 13.639-.48 2.956-1.733 3.92-4.703 3.253-9.534-2.144-19.103-4.132-28.659-6.179-2.462-.527-3.77-1.591-3.01-4.506 1.501-5.76 2.159-11.732 4.393-17.716m8.289 14.677 10.736 2.305c6.228 1.336 6.903.904 7.85-5.23.176-1.146.137-2.326.19-3.49.205-4.543-1.823-7.842-6.018-9.365-4.054-1.472-8.27-1.741-11.655 1.703-3.345 3.404-4.105 7.85-4.21 12.383-.011.503 1.528 1.042 3.107 1.694z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.678)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M379.285 352.746c5.337 7.525 5.183 13.873-.779 19.542-2.803 2.666-5.794 4.899-7.362 8.694-1.307 3.162-3.613 3.338-6.313.983-4.515-3.937-9.25-7.62-13.846-11.465-9.33-7.805-9.775-15.831-1.425-24.722 1.95-2.076 4.071-3.944 6.608-5.267 2.028-1.059 3.976-1.888 5.315 1.112 1.093 2.452 1.424 4.357-1.591 5.643-2.658 1.134-4.786 3.057-6.315 5.504-1.473 2.356-2.116 4.816.443 7.686 3.037-5.722 6.121-11.045 13.084-11.88 4.607-.552 8.527.826 12.18 4.17M366.08 370.32c2.187.7 3.977-.225 5.47-1.614 2.016-1.873 3.534-4.09 2.462-7.055-.928-2.568-2.751-4.137-5.568-4.283-3.057-.159-5.11 1.539-6.346 4.055-1.93 3.926-.31 6.707 3.982 8.897z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.678)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="m184.477 106.417-3.495-13.533c.605-.437.963-.886 1.396-.978 5.51-1.175 10.774-3.21 16.16-4.7 7.876-2.178 15.659 4.765 16.653 13.847.812 7.41-5.522 14.671-13.332 15.22-1.627.114-3.268.016-5.293.016.528 2.152.943 4.068 1.472 5.953.864 3.073.761 5.183-3.138 6.292-4.05 1.153-4.898-.713-5.656-3.888-1.425-5.974-3.095-11.89-4.767-18.229m9.35-.657c1.801 3.13 4.657 3.611 7.785 2.814 2.49-.635 3.875-2.465 4.085-5.077.258-3.197-.386-6.069-3.503-7.636-2.395-1.205-4.925-1.144-7.03.658-2.757 2.358-3.1 5.338-1.337 9.241zM388.152 188.422c-10.128 4.224-17.508 1.573-22.374-7.738-4.526-8.663-2.394-16.15 6.312-21.816 3.761-2.448 7.628-4.732 11.44-7.1 6.839-4.247 7.023-4.184 10.434 4.037-3.962 3.695-9.065 5.867-13.562 8.917-1.65 1.119-3.36 2.163-4.913 3.404-3.527 2.819-4.257 6.276-1.722 10.09 2.434 3.66 5.87 4.278 9.564 2.184a314.423 314.423 0 0 0 15.34-9.31c2.809-1.811 4.574-1.64 6.426 1.409 1.896 3.119 1.595 4.927-1.671 6.73-5.087 2.81-9.968 5.993-15.274 9.193zM343.202 125.134c-.985 1.578-1.734 2.881-2.6 4.1-6.023 8.483-14.049 9.978-22.986 4.312-8.34-5.287-10.4-13.622-5.356-22.448 2.808-4.91 6.05-9.574 8.818-14.505 1.84-3.278 3.756-2.761 6.505-1.25 3.124 1.718 3.39 3.457 1.465 6.312-2.694 3.998-5.08 8.205-7.57 12.34-3.824 6.353-3.672 9.944.496 12.639 4.456 2.882 8.613 1.205 12.51-5.082 2.542-4.103 5.176-8.157 7.532-12.365 1.909-3.408 3.889-2.446 6.512-.905 2.797 1.643 3.34 3.175 1.42 5.924-2.379 3.405-4.393 7.064-6.746 10.928zM127.774 362.68c7.935 1.445 12.669 6.378 16.142 12.729 3.252 5.947 2.64 7.057-4.454 8.61-2.035-3.604-3.385-7.835-6.89-10.579-1.843-1.443-3.906-3.353-6.173-1.458-2.322 1.94-.038 3.95.89 5.725 1.384 2.648 3.155 5.098 4.502 7.763 2.035 4.025 2.117 7.99-1.094 11.587-3.14 3.518-7.227 4.327-11.403 3.018-6.909-2.165-11.372-7.252-14.377-13.687-1.15-2.462.185-3.658 2.328-4.519 2.041-.82 3.774-1.233 4.862 1.397 1.297 3.133 3.271 5.802 6.188 7.633 1.484.93 3.159 1.395 4.588.003 1.28-1.248.846-2.772.058-4.136-1.58-2.735-3.33-5.378-4.814-8.164-4.665-8.754-.696-15.563 9.647-15.922zM413.513 191.546c1.165 3.362-1.45 4.823-2.652 6.864-1.229 2.089-3.175 3.77-3.922 6.529 6.24 2.653 15.241 2.013 14.456 12.709-5.18-.697-9.946-2.536-14.713-4.254-3.625-1.307-6.094-.825-8.297 2.733-2.915 4.71-6.467 9.027-9.88 13.697-8.07-9.022.767-14.074 4.02-20.62-6.248-3.387-16.675-1.748-15.595-13.545 5.565.48 10.604 2.696 15.632 4.512 4.1 1.482 6.224.52 8.527-2.932 2.797-4.193 5.457-8.614 9.26-12.117 2.194 1.81 2.338 4.073 3.164 6.424zM61.95 267.073c-.117-1.363-.336-2.375.585-3.397 3.664.466 5.75 3.585 8.333 5.704 3.112 2.551 5.3 2.298 8.063-.48 3.225-3.244 6.144-6.916 10.214-9.271 5.749 9.278-2.994 13.149-6.858 18.53 1.376 2.809 3.21 3.728 5.88 3.024 3.955-1.044 4.307 1.842 4.857 4.515.623 3.028-.815 4.262-3.675 4.542-10.076.988-20.147 2.034-30.217 3.081-2.962.308-5.201.003-5.436-3.85-.204-3.332.82-4.526 4.265-5.08 4.86-.783 9.955-.15 14.939-2.286-3.588-5.05-11.006-7.145-10.95-15.032z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M241.114 413.96c-.782 9.553-1.615 18.654-2.257 27.768-.298 4.225-1.917 5.668-6.358 4.89-5.211-.912-10.578-1.02-15.887-1.273-6.44-.306-6.652-.48-5.408-7.45 5.813-.828 11.705.242 17.513.439 2.33-6.977 1.254-8.634-5.626-8.971-1.994-.098-3.994-.097-5.984-.245-2.818-.211-3.54-1.971-3.27-4.515.263-2.501 1.507-3.469 4.018-3.16 1.975.242 3.987.181 5.981.283 1.984.1 3.966.235 6.142.367 1.337-2.62 1.69-5.368 1.681-8.181-.008-2.403.387-4.376 3.476-4.213 2.734.143 6.066-.706 5.98 4.262z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.678)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M134.455 145.455c.968-1.564 1.801-2.811 2.354-4.174 1.143-2.818 3.226-2.288 5.406-1.74 2.634.66 2.165 2.593 1.728 4.367-1.669 6.781-9.633 12.595-16.886 12.412-6.723-.17-12.245-5.013-13.859-12.156-1.295-5.734 2.431-12.858 8.424-16.103 5.4-2.925 12.38-1.936 16.61 2.194 1.928 1.88 2.243 3.468.061 5.36-2.004 1.737-3.884 3.623-5.768 5.495-1.855 1.843-4.143 3.303-5.58 6.275 2.97 1.077 5.177.088 7.51-1.93m-8.712-11.113c-3.691 1.407-5.11 3.852-4.117 8.048 3.158-1.296 4.79-3.391 6.531-5.256 2.364-2.532.449-2.87-2.414-2.792z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M324.97 415.814c-8.715 7.866-19.092 7.187-24.21-1.183-1.532-2.505-1.425-4.199 1.37-5.592 4.712-2.348 9.349-4.847 14.227-7.392-4.043-2.89-6.798-2.672-10.457 1.473-2.456 2.782-4.798 3.066-7.148.743-2.387-2.36.102-4.303 1.52-5.92 5.013-5.714 13.562-7.717 19.954-4.882 5.428 2.41 8.66 8.56 8.083 15.256-.238 2.763-1.478 5.057-3.339 7.497m-6.61-8.215c-3.084.963-6.024 2.161-8.398 4.762 2.706 2.097 5.208 2.014 7.526.32 1.56-1.142 3.186-2.607.871-5.082zM100.407 186.683c1.727-2.023 3.794-3.32 5.835-2.128 1.877 1.095 1.291 3.606 1.226 5.55-.273 8.093-7 15.714-14.217 16.22-8.164.573-14.556-4.485-15.915-12.593-1.826-10.893 8.919-20.3 19.147-16.794 3.084 1.056 4.35 2.643 2.653 5.952-2.335 4.548-4.383 9.243-6.655 14.089 5.587-.102 6.879-1.874 7.926-10.296m-14.253.035c-1.709 2.563-3.068 5.099.835 7.755 1.69-3.31 3.725-6.041 4.217-9.501-2.205-1.222-3.34.187-5.052 1.746z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M384.485 297.457c1.876-12.272 10.325-18.203 20.229-14.553 6.18 2.278 10.253 8.901 9.46 15.382-.945 7.727-6.286 13.292-13.361 13.919-5.728.507-7.35-1.363-6.109-7.113.933-4.316 1.92-8.62 2.915-13.073-4.465.56-6.537 3.696-6 8.45.129 1.133.64 2.382.326 3.373-.605 1.914-2.46 2.747-4.274 2.922-1.873.18-2.388-1.62-2.754-3.011-.503-1.91-.956-3.882-.432-6.296m18.92-3.932c-.884 3.155-2.54 6.22-1.443 9.808 3.49-.631 4.701-2.767 4.75-5.645.036-2.057.286-4.47-3.308-4.163z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M245.226 91.239c1.988 7.103 1.387 7.923-5.493 8.083-4.261.099-8.577-.21-13.45 1.817 3.579 3.864 7.549 3.58 10.948 1.712 3.529-1.938 5.176-.04 6.374 2.241 1.456 2.774-1.401 3.707-3.14 4.674-7.861 4.366-18.828 1.394-22.721-6.03-3.693-7.042-.892-15.92 6.217-19.698 7.737-4.113 16.536-1.272 21.265 7.201m-9.994 2.321c1.871-1.172.808-2.19-.249-3.05-3.135-2.55-7.325-1.06-9.39 3.772 3.15-.203 6.045-.388 9.639-.722z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M109.132 345.3c-6.355 3.237-9.51 2.383-13.52-3.069-1.606-2.183-2.115-5.256-5.127-6.726-2.743 4.322-.238 7.29 2.404 9.662 2.661 2.39 2.752 4.303.334 6.608-2.741 2.613-4.251-.187-5.72-1.616-2.76-2.687-4.821-5.907-5.975-9.672-1.755-5.73-.446-10.18 4.648-13.396 4.215-2.659 8.75-4.807 13.107-7.245 2.345-1.312 4.076-.496 4.65 1.787 1.078 4.298 4.016 7.405 6.195 11.02 2.474 4.102 3.107 8.463-.996 12.646m-10.8-14.337c-3.19 3.425.574 5.11 2.017 7.157.762 1.082 2.66.892 3.417-.487 1.598-2.908-.479-4.616-2.499-6.133-.607-.456-1.549-.467-2.934-.537z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M198.782 403.176c9.593 2.582 12.592 7.556 10.291 16.742-.928 3.706-2.106 7.35-3.098 11.041-.71 2.643-1.988 4.13-4.996 3.122-2.675-.897-5.141-1.716-3.879-5.48 1.162-3.464 2.01-7.032 3.082-10.528.955-3.117.484-5.644-2.75-7.035-3.555-1.528-5.98.326-7.266 3.28-1.515 3.482-2.5 7.215-3.48 10.902-.772 2.901-1.909 4.262-5.264 3.25-3.39-1.024-4.637-2.546-3.493-6.093 1.937-6.009 3.567-12.116 5.394-18.161 1.408-4.655 3.819-5.961 7.474-2.859 2.647 2.246 5 1.599 7.985 1.819z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.678)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M345.804 403.382c-5.67 2.14-10.174 1.036-13.74-3.388-3.524-4.37-7.357-8.517-10.196-13.289 5.37-6.435 6.04-6.445 10.784-.444 1.65 2.087 3.272 4.199 4.979 6.238 2.127 2.541 4.531 4.048 7.658 1.482 2.997-2.458 3.116-5.355.976-8.358a149.264 149.264 0 0 0-6.386-8.302c-1.847-2.241-2.534-4.047.34-6.175 2.461-1.824 4.25-2.822 6.566.25 4.782 6.341 9.825 12.486 15.446 19.577-6.88 2.91-10.747 8.422-16.427 12.409zM152.722 120.931c-3.073-9.484-.038-16.445 8.53-20.275 7.415-3.315 15.249-1.037 19.053 5.54 4.336 7.495 1.99 15.933-5.715 20.557-8.341 5.006-16.336 2.991-21.868-5.822m17.93-.83c3.918-2.884 3.778-6.433 1.26-9.98-2.23-3.14-5.469-3.822-8.766-1.802-3.424 2.097-3.668 5.505-2.09 8.75 1.802 3.703 4.788 5.44 9.595 3.032zM386.553 316.556c-1.918 2.998-4.278 5.467-3.825 8.924 1.64 1.049 2.481.237 3.182-.752 1.152-1.625 2.202-3.322 3.351-4.95 2.572-3.639 5.624-6.224 10.472-4.332 4.24 1.655 6.393 5.947 5.379 11.095-.813 4.127-2.638 7.86-5.268 11.154-1.254 1.57-2.578 3.393-4.808 1.206-1.689-1.656-3.486-3.12-1.031-5.766 2.28-2.458 4.418-5.25 3.17-9.48-3.659 1.332-4.456 4.514-6.241 6.73-2.647 3.289-5.444 6.002-10.094 4.378-4.055-1.416-5.882-5.317-5.32-10.615.514-4.83 2.84-8.808 5.768-12.472 1.387-1.736 2.793-4.103 5.583-1.555 2.377 2.17 2.388 4.14-.318 6.435z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M68.697 306.824c-.08-2.442-.031-4.45.962-6.266.916-1.675 1.667-4.37 4.156-3.055 2.098 1.109 4.999 2.575 3.362 6.144-1.872 4.082-.594 7.26 3.325 9.058 3.732 1.712 7.012.175 9.08-2.996 2.333-3.573.907-6.894-2.382-9.013-3.595-2.315-1.929-5.333-.711-7.325 1.518-2.482 3.937-.324 5.617.762 4.75 3.072 7.398 11.47 5.73 17.47-1.7 6.111-6.785 10.294-12.981 10.677-6.295.39-11.929-3.139-14.529-9.3-.765-1.813-1.09-3.811-1.629-6.156z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M104.538 144.542c2.13-.791 2.553.776 3.198 1.822 4.015 6.514 7.88 13.123 12.001 19.568 1.735 2.712 1.302 4.74-.511 7.193-1.795 2.43-3.551 3.543-6.698 2.734-8.305-2.135-16.68-3.992-25.05-5.965 2.012-6.846 3.596-7.724 9.672-6.5 3.98.8 7.824 2.463 12.767 2.463-2.351-3.993-4.112-7.573-6.422-10.754-2.793-3.847-2.99-7.15 1.043-10.561zM109.78 369.766c.723 3.75-2.507 5.805-4.019 4.912-3.483-2.058-5.547.193-8.353 1.352-2.13-3.125-7.487-5.368-1.581-9.821 1.142-.861.68-2.177-.094-3.134-1.768-2.184-1.99-3.963.651-5.764 2.61-1.78 3.915-.144 5.389 1.53.422.48.97.848 1.462 1.267 2.95-.869 4.908-2.999 7.17-4.624 2.338-1.679 3.455-3.772 1.016-6.212-2.377-2.378-.435-3.91.988-5.428 1.782-1.9 3.361-.452 4.76.687 5.732 4.667 5.77 11.55.564 16.827-2.675 2.712-7.375 3.428-7.952 8.408zM371.597 148.717c-7.85 3.317-15.355 6.472-22.86 9.626-5.312 2.232-6.118 1.881-8.958-3.98 2.448-2.39 5.791-3.052 8.8-4.337 11.156-4.763 22.339-9.46 33.506-14.195 5.11-2.167 6.182-1.728 9.439 4.426-6.552 2.776-13.066 5.537-19.927 8.46z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M150.332 405.387c3.05-5.178 6.028-9.98 8.714-14.94 1.64-3.026 3.517-2.824 6.094-1.39 2.647 1.472 3.567 3.033 1.829 5.943-5.363 8.976-10.649 18.003-15.748 27.13-1.79 3.204-3.609 2.459-6.066 1.092-2.66-1.479-3.642-3.04-1.805-5.919 2.407-3.776 4.537-7.73 6.982-11.916zM131.413 113.497c-2.195-2.64-3.578-4.56.039-7.132 3.482-2.476 5.152-1.37 7.166 1.594a1086.944 1086.944 0 0 0 16.322 23.346c2.01 2.797 2.889 4.858-.63 7.388-3.514 2.527-4.973.586-6.708-1.925-5.302-7.675-10.648-15.32-16.189-23.271z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M179.323 402.275c-4.27 9.214-8.498 18.04-12.486 26.97-1.314 2.944-2.76 3.624-5.713 2.163-2.8-1.385-4.25-2.609-2.577-6.028a760.281 760.281 0 0 0 12.78-27.516c1.56-3.538 3.446-3.62 6.61-2.194 3.539 1.597 3.21 3.64 1.386 6.605z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M356.533 121.6c2.18-3.14 4.119-3.746 7.05-1.106 2.758 2.485 2.75 4.29.33 6.948-7.114 7.813-14.041 15.796-20.789 23.427-2.48-.392-3.412-1.906-4.718-2.883-2.422-1.81-2.317-3.507-.29-5.72 6.153-6.72 12.14-13.591 18.417-20.667z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M289.91 429.694c-5.621 4.206-7.393 3.89-8.19-1.143-.294-1.857-.003-3.21 1.947-4.01 4.328-1.777 4.643-5.227 3.539-9.138-.814-2.882-1.536-5.81-2.625-8.59-1.338-3.42.597-4.302 3.247-5.227 2.695-.94 4.402-.644 5.31 2.355 2.35 7.753 4.822 15.47 7.158 22.924-3.295 3.182-6.855 2.381-10.386 2.829z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M259.326 98.424c-.378 3.366-.806 6.313-1.052 9.274-.264 3.188-1.43 4.924-5.049 4.27-3.32-.6-4.815-1.728-4.114-5.603 1.205-6.655 1.825-13.425 2.475-20.168.289-2.99 1.746-3.641 4.326-3.03 3.558.843 6.922 2.705 10.855 1.075 1.515-.628 2.958.622 2.683 2.547-.316 2.218.811 5.426-3.204 5.512-3.826.082-6.303 1.743-6.92 6.123z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M386.229 351.833c-4.76-2.791-9.22-5.371-13.65-8-6.857-4.07-6.848-4.084-1.403-10.906 8.279 3.84 15.957 8.902 23.69 13.675-2.156 7.546-3.15 8.154-8.637 5.23z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M256.138 418.905c-3.99-1.056-4.927-3.645-4.307-6.954.462-2.462 2.41-3.593 4.672-3.705 2.521-.124 4.652 1.157 5.313 3.639 1.163 4.365-1.186 6.461-5.678 7.02z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.873 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M281.77 109.935c2.813-2.763 5.53-2.938 8.118-.511 1.933 1.812 1.907 4.195.744 6.368-1.243 2.32-3.56 3.125-5.94 2.322-3.876-1.308-4.815-4.132-2.923-8.18zM399.222 360.076c-2.72-1.029-4.4-2.617-3.97-5.28.415-2.57 1.837-4.607 4.7-5.008 2.219-.311 3.857.684 4.776 2.685 1.123 2.448.202 4.47-1.593 6.196-.97.934-2.11 1.563-3.913 1.407z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "currentColor",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(1.22 0 0 1.22 -42.885 -72.69)"
        vectorEffect="non-scaling-stroke"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className = "", ...rest }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className = "", ...rest }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const LinkArrowIcon = ({ className = "", ...rest }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
