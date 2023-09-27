import React from "react";
import styles from "./icon.module.sass";
import classNames from "classnames";

export enum EIcons {
   pomodoroIcon = "pomodoroIcon",
   equalizerIcon = "equalizerIcon",
   addIcon = "addIcon",
   increaseIcon = "increaseIcon",
   decreaseIcon = "decreaseIcon",
   editIcon = "editIcon",
   deleteIcon = "deleteIcon",
   closeIcon = "closeIcon"
}

export type iconType = EIcons.pomodoroIcon
   | EIcons.equalizerIcon
   | EIcons.addIcon
   | EIcons.decreaseIcon
   | EIcons.editIcon
   | EIcons.increaseIcon
   | EIcons.deleteIcon
   | EIcons.closeIcon

export function Icon( { name, size }: { name: iconType, size?: number } ) {
   let iconClass = 'icon';
   if (size) {
      iconClass = classNames(styles[`px${size}`]);
   }
   const icons = {
      pomodoroIcon: (
         <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_18345_116)">
               <path
                  d="M38.9151 23.2834C38.9151 33.7058 30.466 40 20.0437 40C9.62098 40 1.17188 31.5509 1.17188 21.1282C1.17188 10.7059 9.88496 4.2981 20.3073 4.2981C30.73 4.2981 38.9151 12.8607 38.9151 23.2834Z"
                  fill="#DC3E22"/>
               <path
                  d="M28.238 12.6065C27.3211 11.6729 25.8377 10.8048 24.733 10.551C25.3401 10.0127 25.4623 9.99491 26.2227 9.61813C28.1713 8.65362 31.0576 8.56482 31.0576 8.56482C31.0576 8.56482 27.6509 6.80417 25.1601 6.91465C24.5259 6.94254 23.8571 7.16655 23.2118 7.484C23.5757 6.97051 23.9205 6.45995 24.1409 6.0764C24.8152 4.90365 25.524 3.42624 25.524 3.42624C25.524 3.42624 22.9122 3.5657 21.7008 5.01562C21.2407 5.56642 20.8934 6.26622 20.6392 6.92272C20.1878 6.40416 19.6896 5.94239 19.1913 5.58192C16.6999 3.77893 12.7192 4.169 12.7192 4.169C12.7192 4.169 15.7263 5.87482 17.0793 7.57653C17.6076 8.24107 18.1437 8.54839 18.4642 9.29349C17.3564 9.05364 14.8569 9.13562 13.63 9.59054C10.4771 10.7599 9.11852 15.4649 9.11852 15.4649C9.11852 15.4649 12.1952 13.3442 16.3813 11.8565C17.3017 11.5295 18.2748 11.4428 19.1229 11.4577C18.7379 12.0575 18.3173 12.8363 17.999 13.7546C17.2247 15.9904 18.2479 21.3113 18.2479 21.3113C18.2479 21.3113 20.4896 18.1646 21.403 15.6156C21.8718 14.3073 21.9879 12.9936 21.9904 12.0242C22.8217 12.3931 23.8009 12.9319 24.5326 13.398C28.2794 15.7852 30.072 20.1435 30.072 20.1435C30.072 20.1435 30.5941 15.0059 28.238 12.6065Z"
                  fill="#899441"/>
               <path
                  d="M20.5008 10.3094C20.4889 10.3094 20.477 10.3091 20.4651 10.3088C19.7242 10.2896 19.1391 9.67376 19.1572 8.9334C19.1587 8.86931 19.2234 4.36125 16.7191 2.40111C16.135 1.94395 16.0318 1.09984 16.489 0.515424C16.9465 -0.0686834 17.7906 -0.171833 18.3747 0.285626C21.9559 3.08806 21.8491 8.76128 21.843 9.00145C21.8238 9.73083 21.2262 10.3094 20.5008 10.3094Z"
                  fill="#A8B64F"/>
            </g>
            <defs>
               <clipPath id="clip0_18345_116">
                  <rect width="40" height="40" fill="white"/>
               </clipPath>
            </defs>
         </svg>

      ),
      equalizerIcon: ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_18345_122)">
               <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill="#DC3E22"/>
            </g>
            <defs>
               <clipPath id="clip0_18345_122">
                  <rect width="24" height="24" fill="white"/>
               </clipPath>
            </defs>
         </svg>
      ),
      addIcon: (
         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" fill="#C4C4C4"/>
            <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z"
                  fill="white"/>
         </svg>
      ),
      increaseIcon: (
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M8.75 4.25H7.25V7.25H4.25V8.75H7.25V11.75H8.75V8.75H11.75V7.25H8.75V4.25ZM8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z"
               fill="#A8B64F"/>
         </svg>
      ),
      decreaseIcon: (
         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_34_33)">
               <path
                  d="M9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075 12.3075 15 9 15Z"
                  fill="#C4C4C4"/>
               <path d="M5.25 8.25H8.25H9.75H12.75V9.75H9.75H8.25H5.25V8.25Z" fill="#C4C4C4"/>
            </g>
            <defs>
               <clipPath id="clip0_34_33">
                  <rect width="18" height="18" fill="white"/>
               </clipPath>
            </defs>
         </svg>
      ),
      editIcon: (
         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_35_33)">
               <path
                  d="M10.545 6.765L11.235 7.455L4.44 14.25H3.75V13.56L10.545 6.765ZM13.245 2.25C13.0575 2.25 12.8625 2.325 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.6275 2.3175 13.44 2.25 13.245 2.25ZM10.545 4.6425L2.25 12.9375V15.75H5.0625L13.3575 7.455L10.545 4.6425Z"
                  fill="#A8B64F"/>
            </g>
            <defs>
               <clipPath id="clip0_35_33">
                  <rect width="18" height="18" fill="white"/>
               </clipPath>
            </defs>
         </svg>
      ),
      deleteIcon: (
         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_35_21)">
               <path
                  d="M12 6.75V14.25H6V6.75H12ZM10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3H11.625L10.875 2.25ZM13.5 5.25H4.5V14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25Z"
                  fill="#A8B64F"/>
            </g>
            <defs>
               <clipPath id="clip0_35_21">
                  <rect width="18" height="18" fill="white"/>
               </clipPath>
            </defs>
         </svg>
      ),
      closeIcon: (
         <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.9115 8.80583L2.84406 13.9567L0.961665 12.0433L6.02911 6.89245L1.0675 1.84914L2.85992 0.0272091L7.82153 5.07052L12.7673 0.0433371L14.6497 1.95672L9.70392 6.9839L14.6655 12.0272L12.8731 13.8491L7.9115 8.80583Z" fill="#C4C4C4"/>
         </svg>
      )

   };

   return (
      <div className={iconClass}>
         {icons[name]}
      </div>
   );
}
