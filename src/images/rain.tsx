import React from "react";

export default function Rain({ color = "white" }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.90778 9.00997C8.92419 8.59868 9.46792 7.46914 9.05502 6.44872C8.64332 5.43232 5.87944 3.99983 5.87944 3.99983C5.87944 3.99983 4.88741 6.95297 5.29884 7.96909C5.71188 8.98964 6.88843 9.42264 7.90778 9.00984V9.00997Z"
        fill={color}
      />
      <path
        d="M12.1647 15.0288C12.1647 15.0288 11.1444 17.9035 11.5557 18.9196C11.9685 19.9389 13.1422 20.3742 14.1617 19.9614C15.181 19.5488 15.7213 18.4196 15.3087 17.4003C14.8972 16.3839 12.1647 15.0287 12.1647 15.0287V15.0288Z"
        fill={color}
      />
      <path
        d="M5.78 13.8796C5.78 13.8796 4.66064 16.976 5.10379 18.0706C5.54802 19.168 6.83747 19.6474 7.93502 19.2028C9.02962 18.7597 9.54271 17.5511 9.09833 16.4535C8.65488 15.359 5.78 13.8796 5.78 13.8796V13.8796Z"
        fill={color}
      />
      <path
        d="M12.1407 12.9415C12.7656 12.6885 13.0139 11.9518 12.7921 11.404C12.5379 10.776 10.9367 9.96761 10.9367 9.96761C10.9367 9.96761 10.3481 11.6626 10.6022 12.2909C10.824 12.8384 11.5139 13.1953 12.1407 12.9415H12.1407Z"
        fill={color}
      />
      <path
        d="M18.2747 12.6813C18.0205 12.0533 16.4193 11.2449 16.4193 11.2449C16.4193 11.2449 15.8307 12.9399 16.0849 13.5681C16.3067 14.1158 16.9967 14.4727 17.6233 14.219C18.2483 13.9658 18.4968 13.229 18.2747 12.6812L18.2747 12.6813Z"
        fill={color}
      />
      <path
        d="M17.0525 6.63637C16.641 5.62011 13.877 4.18762 13.877 4.18762C13.877 4.18762 12.885 7.14074 13.2964 8.15687C13.7096 9.17741 14.8861 9.61013 15.9054 9.1975C16.9215 8.78635 17.4655 7.65705 17.0525 6.63627V6.63637Z"
        fill={color}
      />
      <path
        d="M19.8018 18.7413C19.5476 18.1133 17.9464 17.3049 17.9464 17.3049C17.9464 17.3049 17.3578 18.9999 17.612 19.6282C17.8338 20.1758 18.5236 20.5327 19.1504 20.2788C19.7752 20.0258 20.0236 19.2891 19.8018 18.7413H19.8018Z"
        fill={color}
      />
    </svg>
  );
}
