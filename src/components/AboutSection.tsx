import { Input } from '@chakra-ui/react'
import React from 'react' 

export default function AboutSection() {
    return (
      <div className="w-full px-6 py-20 flex flex-col justify-center items-center">
        <p className=" font-CircularStd-Bold text-3xl text-white">
          About our project
        </p>
        <p className="text-white font-CircularStd-Regular my-4">
          Click here to read our white paper
        </p>
        <a
          href="/whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#FFF", color: "#00A0FF" }}
          className="rounded-xl flex items-center w-auto px-5 ml-5 text-sm h-12 mt-2"
        >
          <svg
            className="mr-2"
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4925 0.666664C14.0667 0.666664 15.5 2.15 15.5 4.69166V13.3C15.5 15.8833 14.0667 17.3333 11.4925 17.3333H4.50833C1.975 17.3333 0.5 15.8833 0.5 13.3V4.69166C0.5 2.15 1.975 0.666664 4.50833 0.666664H11.4925ZM4.73333 12.1167C4.48333 12.0917 4.24167 12.2083 4.10833 12.425C3.975 12.6333 3.975 12.9083 4.10833 13.125C4.24167 13.3333 4.48333 13.4583 4.73333 13.425H11.2667C11.5992 13.3917 11.85 13.1075 11.85 12.775C11.85 12.4333 11.5992 12.15 11.2667 12.1167H4.73333ZM11.2667 8.31583H4.73333C4.37417 8.31583 4.08333 8.60833 4.08333 8.96666C4.08333 9.325 4.37417 9.61666 4.73333 9.61666H11.2667C11.625 9.61666 11.9167 9.325 11.9167 8.96666C11.9167 8.60833 11.625 8.31583 11.2667 8.31583ZM7.22417 4.54166H4.73333V4.55C4.37417 4.55 4.08333 4.84166 4.08333 5.2C4.08333 5.55833 4.37417 5.85 4.73333 5.85H7.22417C7.58333 5.85 7.875 5.55833 7.875 5.19083C7.875 4.83333 7.58333 4.54166 7.22417 4.54166Z"
              fill="#00A0FF"
            />
          </svg>
          Read white paper
        </a>
      </div>
    );
}
